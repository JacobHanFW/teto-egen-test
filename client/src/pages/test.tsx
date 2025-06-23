import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { questions } from "@/lib/test-data";
import { TestStorage } from "@/lib/storage";
import { ProgressBar } from "@/components/progress-bar";
import { QuestionCard } from "@/components/question-card";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { apiRequest } from "@/lib/queryClient";
import { nanoid } from "nanoid";
import { useLanguage } from "@/hooks/use-language";
import { trackEvent } from "@/lib/analytics";
import type { TestScores } from "@shared/schema";

export default function Test() {
  const [, setLocation] = useLocation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();

  // Load progress on component mount
  useEffect(() => {
    const savedProgress = TestStorage.loadProgress();
    if (savedProgress) {
      setCurrentQuestionIndex(savedProgress.currentQuestionIndex);
      setAnswers(savedProgress.answers);
    }
  }, []);

  // Save progress whenever state changes
  useEffect(() => {
    if (currentQuestionIndex > 0 || answers.length > 0) {
      TestStorage.saveProgress({
        currentQuestionIndex,
        answers,
        startTime: Date.now()
      });
    }
  }, [currentQuestionIndex, answers]);

  const handleAnswerSelect = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleNext = async () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      await submitTest();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const calculateResult = (answers: number[]): string => {
    const scores: TestScores = { TE: 0, EG: 0 };

    answers.forEach((answerIndex, questionIndex) => {
      const question = questions[questionIndex];
      const selectedOption = question.options[answerIndex];
      scores[selectedOption.type] += selectedOption.weight;
    });

    const teDiff = Math.abs(scores.TE - scores.EG);
    
    if (teDiff <= 4) {
      return 'TE-EG'; // Mixed type
    } else if (scores.TE > scores.EG) {
      return 'TE';
    } else {
      return 'EG';
    }
  };

  const submitTest = async () => {
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    try {
      const resultType = calculateResult(answers);
      const sessionId = nanoid();
      
      // Track test completion
      trackEvent('test_complete', 'engagement', resultType);
      
      await apiRequest('POST', '/api/test-results', {
        sessionId,
        answers,
        resultType,
        completedAt: new Date().toISOString()
      });

      // Save result to local storage
      TestStorage.saveResult(resultType, sessionId);
      
      // Clear progress
      TestStorage.clearProgress();
      
      // Navigate to results
      setLocation(`/results/${sessionId}`);
    } catch (error) {
      console.error('Failed to submit test:', error);
      // Still navigate to results with local data
      const resultType = calculateResult(answers);
      const sessionId = nanoid();
      TestStorage.saveResult(resultType, sessionId);
      TestStorage.clearProgress();
      setLocation(`/results/${sessionId}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentQuestion = t.questions[currentQuestionIndex];
  const selectedAnswer = answers[currentQuestionIndex];
  const canGoNext = selectedAnswer !== undefined || isSubmitting;
  const canGoPrevious = currentQuestionIndex > 0 && !isSubmitting;

  return (
    <div className="min-h-screen p-4 relative">
      {/* Controls outside the frame - top right */}
      <div className="absolute top-4 right-4 flex gap-3 z-20">
        <LanguageToggle />
        <ThemeToggle />
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="gradient-card p-6 mb-6">
          <ProgressBar 
            current={currentQuestionIndex + 1} 
            total={questions.length}
          />
        </div>

        <QuestionCard
          questionText={currentQuestion.question}
          options={currentQuestion.options}
          selectedAnswer={selectedAnswer}
          onAnswerSelect={handleAnswerSelect}
          onNext={handleNext}
          onPrevious={handlePrevious}
          canGoNext={canGoNext}
          canGoPrevious={canGoPrevious}
        />
      </div>
    </div>
  );
}
