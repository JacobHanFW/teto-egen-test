import { Button } from "@/components/ui/button";
import { RotateCcw, Share, Download, Heart } from "lucide-react";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import html2canvas from "html2canvas";
import { useRef } from "react";

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
  onDownloadResult: () => void;
}

export function ResultCard({ personalityType, onRetakeTest, onShareResult, onDownloadResult }: ResultCardProps) {
  const { t } = useLanguage();
  const resultCardRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!resultCardRef.current) return;
    
    try {
      const canvas = await html2canvas(resultCardRef.current, {
        backgroundColor: '#ffffff',
        scale: 2,
        useCORS: true,
        allowTaint: true,
        height: resultCardRef.current.scrollHeight,
        width: resultCardRef.current.scrollWidth
      });
      
      const link = document.createElement('a');
      link.download = `${personalityType.name}_결과.png`;
      link.href = canvas.toDataURL();
      link.click();
      
      onDownloadResult();
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <div ref={resultCardRef} className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 p-8 mb-8">
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

      <div className="bg-slate-50 dark:bg-slate-700 rounded-2xl p-6 mb-6 border border-slate-100 dark:border-slate-600">
        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">{t.detailedDescription}</h3>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          {personalityType.description}
        </p>
      </div>

      {/* 연예 먹이사슬 매력 정보 */}
      {personalityType.attractedTo && (
        <div className="bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20 rounded-2xl p-6 mb-8 border border-pink-200 dark:border-pink-700">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="text-pink-500 w-6 h-6" />
            <h3 className="text-xl font-semibold text-pink-800 dark:text-pink-200">연예 먹이사슬 매력 분석</h3>
          </div>
          <div className="space-y-3">
            <p className="text-pink-700 dark:text-pink-300">
              <strong>끌리는 타입:</strong> {personalityType.attractedTo.name}
            </p>
            <p className="text-pink-600 dark:text-pink-300 leading-relaxed">
              {personalityType.attractedTo.description}
            </p>
          </div>
        </div>
      )}

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
          onClick={handleDownload}
          variant="outline" 
          className="px-8 py-3 font-semibold hover:bg-blue-50 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 border-blue-200 dark:border-blue-700"
        >
          <Download className="mr-2 h-4 w-4" />
          테스트 결과 다운로드
        </Button>
        
        <Button 
          onClick={onShareResult}
          className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <Share className="mr-2 h-4 w-4" />
          {t.shareResult}
        </Button>
      </div>
    </div>
  );
}
