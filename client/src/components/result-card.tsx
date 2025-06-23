import { Button } from "@/components/ui/button";
import { RotateCcw, Share } from "lucide-react";
import { CheckCircle } from "lucide-react";
import { I18n } from "@/lib/i18n";

interface PersonalityTypeResult {
  code: string;
  name: string;
  subtitle: string;
  icon: string;
  traits: string[];
  description: string;
  analysis: { label: string; value: number }[];
}

interface ResultCardProps {
  personalityType: PersonalityTypeResult;
  onRetakeTest: () => void;
  onShareResult: () => void;
}

export function ResultCard({ personalityType, onRetakeTest, onShareResult }: ResultCardProps) {
  const t = I18n.t();

  return (
    <div className="gradient-card p-8 mb-8">
      <div className="text-center mb-8">
        <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
          <span className="text-white text-4xl font-bold">{personalityType.icon}</span>
        </div>
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">{personalityType.name}</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">{personalityType.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4 flex items-center">
            <div className="w-6 h-6 text-primary mr-3">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            {t.keyTraits}
          </h3>
          <ul className="space-y-3 text-slate-700 dark:text-slate-300">
            {personalityType.traits.map((trait, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                {trait}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4 flex items-center">
            <div className="w-6 h-6 text-secondary mr-3">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            {t.tendencyAnalysis}
          </h3>
          <div className="space-y-3">
            {personalityType.analysis.map((item, index) => (
              <div key={index} className="flex items-center justify-between mb-2">
                <span className="text-slate-700 dark:text-slate-300 font-medium">{item.label}</span>
                <div className="flex-1 mx-3">
                  <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000" 
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
                <span className="text-primary font-semibold">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-700 rounded-2xl p-6 mb-8 border border-slate-100 dark:border-slate-600">
        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">{t.detailedDescription}</h3>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          {personalityType.description}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          onClick={onRetakeTest}
          variant="secondary"
          className="px-8 py-3 font-semibold"
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          {t.retakeTest}
        </Button>
        
        <Button 
          onClick={onShareResult}
          className="gradient-button px-8 py-3"
        >
          <Share className="mr-2 h-4 w-4" />
          {t.shareResult}
        </Button>
      </div>
    </div>
  );
}
