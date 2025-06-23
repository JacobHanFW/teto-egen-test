import { useParams, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Star } from "lucide-react";
import { personalityTypes } from "@/lib/test-data";
import { TestStorage } from "@/lib/storage";
import { ResultCard } from "@/components/result-card";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import type { TestSession } from "@shared/schema";

export default function Results() {
  const { sessionId } = useParams<{ sessionId?: string }>();
  const [, setLocation] = useLocation();
  const { toast } = useToast();

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
    TestStorage.clearProgress();
    TestStorage.clearResult();
    setLocation("/");
  };

  const handleShareResult = () => {
    if (!session) return;
    
    const personalityType = personalityTypes[session.resultType];
    if (!personalityType) return;

    const shareText = `나의 테토-에겐 성격 유형은 "${personalityType.name} - ${personalityType.subtitle}"입니다! 당신도 테스트해보세요: ${window.location.origin}`;
    
    if (navigator.share) {
      navigator.share({
        title: '테토-에겐 성격 유형 검사 결과',
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
        title: "공유 완료",
        description: "결과가 클립보드에 복사되었습니다!",
      });
    } catch (err) {
      toast({
        title: "공유 실패",
        description: "결과 공유에 실패했습니다.",
        variant: "destructive"
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-6 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-slate-600">결과를 불러오는 중...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error || !session || !personalityTypes[session.resultType]) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-6 text-center">
            <div className="text-red-500 text-4xl mb-4">⚠️</div>
            <h2 className="text-xl font-semibold text-slate-800 mb-2">결과를 찾을 수 없습니다</h2>
            <p className="text-slate-600 mb-4">
              테스트 결과를 불러올 수 없습니다. 다시 테스트를 진행해주세요.
            </p>
            <button 
              onClick={handleRetakeTest}
              className="gradient-button px-6 py-2 rounded-lg"
            >
              테스트 다시하기
            </button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const personalityType = personalityTypes[session.resultType];

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-accent to-emerald-400 rounded-full mb-6">
            <Star className="text-white text-3xl" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">검사 완료!</h1>
          <p className="text-xl text-slate-600">당신의 테토-에겐 성격 유형 결과입니다</p>
        </div>

        <ResultCard
          personalityType={personalityType}
          onRetakeTest={handleRetakeTest}
          onShareResult={handleShareResult}
        />
      </div>
    </div>
  );
}
