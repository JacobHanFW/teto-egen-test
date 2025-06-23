import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Brain, Clock, HelpCircle, TrendingUp } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { trackEvent } from "@/lib/analytics";
import { useLanguage } from "@/hooks/use-language";

export default function Home() {
  const [, setLocation] = useLocation();
  const { t } = useLanguage();

  const startTest = () => {
    trackEvent('test_start', 'engagement', 'start_button');
    setLocation("/test");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="gradient-card p-8 mb-6 relative">
          {/* Controls inside the card - top right */}
          <div className="absolute top-4 right-4 flex gap-3 z-10">
            <LanguageToggle />
            <ThemeToggle />
          </div>

          <div className="mb-8 pt-8">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
              <Brain className="text-white text-2xl" />
            </div>
            <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">{t.title}</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {t.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="info-card">
              <div className="text-primary text-2xl mb-2">
                <Clock className="mx-auto" />
              </div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">{t.timeRequired}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{t.timeValue}</p>
            </div>
            
            <div className="info-card">
              <div className="text-secondary text-2xl mb-2">
                <HelpCircle className="mx-auto" />
              </div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">{t.questionCount}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{t.questionValue}</p>
            </div>
            
            <div className="info-card">
              <div className="text-accent text-2xl mb-2">
                <TrendingUp className="mx-auto" />
              </div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">{t.accuracy}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{t.accuracyValue}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <Button 
              onClick={startTest}
              className="gradient-button w-full py-4 px-8 text-lg"
            >
              {t.startTest}
            </Button>
            
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {t.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
