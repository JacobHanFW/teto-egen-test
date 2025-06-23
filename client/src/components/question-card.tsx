import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

interface QuestionCardProps {
  questionText: string;
  options: string[];
  selectedAnswer?: number;
  onAnswerSelect: (optionIndex: number) => void;
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
}

export function QuestionCard({
  questionText,
  options,
  selectedAnswer,
  onAnswerSelect,
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext
}: QuestionCardProps) {
  const { t } = useLanguage();

  return (
    <div className="gradient-card p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-medium text-slate-800 dark:text-slate-200 leading-relaxed mb-6">
          {questionText}
        </h3>
        
        <div className="space-y-4">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswerSelect(index)}
              className={`option-button ${selectedAnswer === index ? 'option-button-selected' : ''}`}
            >
              <div className="flex items-center">
                <div className="w-6 h-6 border-2 border-slate-300 dark:border-slate-500 rounded-full mr-4 flex items-center justify-center">
                  <div 
                    className={`w-3 h-3 rounded-full bg-primary transition-opacity ${
                      selectedAnswer === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>
                <span className="text-slate-700 dark:text-slate-300 font-medium">{option}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between items-center pt-6 border-t border-slate-200 dark:border-slate-600">
        <Button
          onClick={onPrevious}
          disabled={!canGoPrevious}
          variant="ghost"
          className="px-6 py-3 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-medium"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t.previous}
        </Button>
        
        <Button
          onClick={onNext}
          disabled={!canGoNext}
          className="gradient-button px-8 py-3"
        >
          {t.next}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
