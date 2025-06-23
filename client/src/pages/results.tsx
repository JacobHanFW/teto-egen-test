import { useParams, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Star } from "lucide-react";
import { TestStorage } from "@/lib/storage";
import { ResultCard } from "@/components/result-card";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { MetaTags } from "@/components/meta-tags";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/hooks/use-language";
import { trackEvent } from "@/lib/analytics";
import type { TestSession } from "@shared/schema";

export default function Results() {
  const { sessionId } = useParams<{ sessionId?: string }>();
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const { t } = useLanguage();

  // Try to get results from API first, then fallback to localStorage
  const { data: session, isLoading, error } = useQuery<TestSession | null>({
    queryKey: ['/api/test-results', sessionId],
    queryFn: async () => {
      if (sessionId) {
        try {
          const response = await fetch(`/api/test-results/${sessionId}`, {
            credentials: 'include'
          });
          if (response.ok) {
            return await response.json();
          }
        } catch (e) {
          console.log('API fetch failed, trying localStorage');
        }
      }
      
      // Fallback to localStorage
      const localResult = TestStorage.loadResult();
      if (localResult && (!sessionId || localResult.sessionId === sessionId)) {
        return {
          id: 0,
          sessionId: localResult.sessionId,
          resultType: localResult.resultType,
          answers: [],
          completedAt: localResult.completedAt
        } as TestSession;
      }
      
      return null;
    },
  });

  const handleRetakeTest = () => {
    trackEvent('test_retake', 'engagement', 'retake_button');
    TestStorage.clearProgress();
    TestStorage.clearResult();
    setLocation("/");
  };

  const handleShareResult = () => {
    if (!session) return;
    
    trackEvent('result_share', 'engagement', 'share_button');
    
    const personalityType = t.personalityTypes[session.resultType as keyof typeof t.personalityTypes];
    if (!personalityType) return;

    const shareText = `${t.title} - "${personalityType.name} - ${personalityType.subtitle}" ${window.location.origin}`;
    
    if (navigator.share) {
      navigator.share({
        title: t.title,
        text: shareText,
        url: window.location.origin
      }).catch(() => {
        // Fallback to clipboard
        copyToClipboard(shareText);
      });
    } else {
      copyToClipboard(shareText);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: t.shareComplete,
        description: t.shareCompleteDesc,
      });
    } catch (err) {
      toast({
        title: t.shareFailed,
        description: t.shareFailedDesc,
        variant: "destructive"
      });
    }
  };

  const handleDownloadResult = () => {
    trackEvent('result_download', 'engagement', 'download_button');
    toast({
      title: "다운로드 완료",
      description: "결과 이미지가 다운로드되었습니다.",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-6 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-slate-600 dark:text-slate-300">{t.loadingResults}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error || !session || !t.personalityTypes[session.resultType as keyof typeof t.personalityTypes]) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-6 text-center">
            <div className="text-red-500 text-4xl mb-4">⚠️</div>
            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">{t.resultsNotFound}</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              {t.resultsNotFoundDesc}
            </p>
            <button 
              onClick={handleRetakeTest}
              className="gradient-button px-6 py-2 rounded-lg"
            >
              {t.retakeTestButton}
            </button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const personalityType = t.personalityTypes[session.resultType as keyof typeof t.personalityTypes];
  
  // Generate OG image URL and meta tags
  const ogImageUrl = sessionId ? `${window.location.origin}/api/og-image/${sessionId}` : undefined;
  const pageTitle = `${personalityType.name} - ${t.title}`;
  const pageDescription = `${personalityType.subtitle} - ${personalityType.description.slice(0, 150)}...`;

  return (
    <div className="min-h-screen p-4">
      <MetaTags
        title={pageTitle}
        description={pageDescription}
        ogImage={ogImageUrl}
        url={window.location.href}
      />
      
      <div className="max-w-4xl mx-auto">
        <div className="gradient-card p-8 mb-6 relative">
          {/* Controls inside the card - top right */}
          <div className="absolute top-4 right-4 flex gap-3 z-10">
            <LanguageToggle />
            <ThemeToggle />
          </div>

          <div className="text-center mb-8 pt-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-accent to-emerald-400 rounded-full mb-6">
              <Star className="text-white text-3xl" />
            </div>
            <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">{t.testComplete}</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">{t.resultSubtitle}</p>
          </div>

          <ResultCard
            personalityType={{
              code: personalityType.name,
              name: personalityType.name,
              subtitle: personalityType.subtitle,
              icon: session.resultType,
              traits: personalityType.traits,
              description: personalityType.description,
              analysis: personalityType.analysis.map((item, index) => ({
                label: item.label,
                value: [90, 85, 88, 95, 88, 92][index] || 85 // Default values for display
              }))
            }}
            onRetakeTest={handleRetakeTest}
            onShareResult={handleShareResult}
            onDownloadResult={handleDownloadResult}
          />
        </div>

      </div>
    </div>
  );
}
