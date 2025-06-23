import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Brain, Clock, HelpCircle, TrendingUp } from "lucide-react";

export default function Home() {
  const [, setLocation] = useLocation();

  const startTest = () => {
    setLocation("/test");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="gradient-card p-8 mb-6">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
              <Brain className="text-white text-2xl" />
            </div>
            <h1 className="text-4xl font-bold text-slate-800 mb-4">테토-에겐 성격 유형 검사</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              당신의 독특한 성격을 발견하고 이해해보세요. 
              이 검사는 당신의 사고방식, 행동 패턴, 그리고 세상을 바라보는 관점을 분석합니다.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="info-card">
              <div className="text-primary text-2xl mb-2">
                <Clock className="mx-auto" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-1">소요시간</h3>
              <p className="text-sm text-slate-600">약 10-15분</p>
            </div>
            
            <div className="info-card">
              <div className="text-secondary text-2xl mb-2">
                <HelpCircle className="mx-auto" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-1">질문 수</h3>
              <p className="text-sm text-slate-600">총 20개 문항</p>
            </div>
            
            <div className="info-card">
              <div className="text-accent text-2xl mb-2">
                <TrendingUp className="mx-auto" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-1">정확도</h3>
              <p className="text-sm text-slate-600">신뢰할 수 있는 결과</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <Button 
              onClick={startTest}
              className="gradient-button w-full py-4 px-8 text-lg"
            >
              테스트 시작하기
            </Button>
            
            <p className="text-sm text-slate-500">
              * 정확한 결과를 위해 솔직하게 답변해주세요
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
