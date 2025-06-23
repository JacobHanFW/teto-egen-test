import { Question } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface QuestionCardProps {
  question: Question;
  selectedAnswer?: number;
  onAnswerSelect: (optionIndex: number) => void;
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
}

export function QuestionCard({
  question,
  selectedAnswer,
  onAnswerSelect,
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext
}: QuestionCardProps) {
  return (
    <div className="gradient-card p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-medium text-slate-800 leading-relaxed mb-6">
          {question.question}
        </h3>
        
        <div className="space-y-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswerSelect(index)}
              className={`option-button ${selectedAnswer === index ? 'option-button-selected' : ''}`}
            >
              <div className="flex items-center">
                <div className="w-6 h-6 border-2 border-slate-300 rounded-full mr-4 flex items-center justify-center">
                  <div 
                    className={`w-3 h-3 rounded-full bg-primary transition-opacity ${
                      selectedAnswer === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>
                <span className="text-slate-700 font-medium">{option.text}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between items-center pt-6 border-t border-slate-200">
        <Button
          onClick={onPrevious}
          disabled={!canGoPrevious}
          variant="ghost"
          className="px-6 py-3 text-slate-600 hover:text-slate-800 font-medium"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          이전
        </Button>
        
        <Button
          onClick={onNext}
          disabled={!canGoNext}
          className="gradient-button px-8 py-3"
        >
          다음
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
