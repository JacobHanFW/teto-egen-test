export type Language = 'ko' | 'en';

export interface Translations {
  // Home page
  title: string;
  subtitle: string;
  timeRequired: string;
  timeValue: string;
  questionCount: string;
  questionValue: string;
  accuracy: string;
  accuracyValue: string;
  startTest: string;
  disclaimer: string;
  
  // Test page
  testTitle: string;
  previous: string;
  next: string;
  
  // Results page
  testComplete: string;
  resultSubtitle: string;
  keyTraits: string;
  tendencyAnalysis: string;
  detailedDescription: string;
  retakeTest: string;
  shareResult: string;
  loadingResults: string;
  resultsNotFound: string;
  resultsNotFoundDesc: string;
  retakeTestButton: string;
  shareComplete: string;
  shareCompleteDesc: string;
  shareFailed: string;
  shareFailedDesc: string;
  
  // Personality types
  personalityTypes: {
    TE: {
      name: string;
      subtitle: string;
      traits: string[];
      description: string;
      analysis: { label: string }[];
    };
    EG: {
      name: string;
      subtitle: string;
      traits: string[];
      description: string;
      analysis: { label: string }[];
    };
    'TE-EG': {
      name: string;
      subtitle: string;
      traits: string[];
      description: string;
      analysis: { label: string }[];
    };
  };
  
  // Questions
  questions: {
    question: string;
    options: string[];
  }[];
}

export const translations: Record<Language, Translations> = {
  ko: {
    title: '테토-에겐 성격 유형 검사',
    subtitle: '당신의 독특한 성격을 발견하고 이해해보세요. 이 검사는 당신의 사고방식, 행동 패턴, 그리고 세상을 바라보는 관점을 분석합니다.',
    timeRequired: '소요시간',
    timeValue: '약 10-15분',
    questionCount: '질문 수',
    questionValue: '총 20개 문항',
    accuracy: '정확도',
    accuracyValue: '신뢰할 수 있는 결과',
    startTest: '테스트 시작하기',
    disclaimer: '* 정확한 결과를 위해 솔직하게 답변해주세요',
    
    testTitle: '성격 유형 검사',
    previous: '이전',
    next: '다음',
    
    testComplete: '검사 완료!',
    resultSubtitle: '당신의 테토-에겐 성격 유형 결과입니다',
    keyTraits: '주요 특징',
    tendencyAnalysis: '성향 분석',
    detailedDescription: '상세 설명',
    retakeTest: '다시 테스트하기',
    shareResult: '테스트 결과 공유하기',
    loadingResults: '결과를 불러오는 중...',
    resultsNotFound: '결과를 찾을 수 없습니다',
    resultsNotFoundDesc: '테스트 결과를 불러올 수 없습니다. 다시 테스트를 진행해주세요.',
    retakeTestButton: '테스트 다시하기',
    shareComplete: '공유 완료',
    shareCompleteDesc: '결과가 클립보드에 복사되었습니다!',
    shareFailed: '공유 실패',
    shareFailedDesc: '결과 공유에 실패했습니다.',
    
    personalityTypes: {
      TE: {
        name: '테토 타입',
        subtitle: '창의적이고 독립적인 사고형',
        traits: [
          '독창적이고 창의적인 사고',
          '독립적이고 자유로운 성향',
          '논리적 분석을 선호함',
          '새로운 아이디어에 개방적',
          '체계적이고 계획적인 접근'
        ],
        description: '테토 타입은 독창적이고 창의적인 사고를 가진 성격으로, 기존의 틀에 얽매이지 않고 새로운 관점에서 문제를 바라보는 것을 좋아합니다. 논리적이고 체계적인 접근을 통해 복잡한 문제를 해결하는 데 뛰어난 능력을 보입니다.',
        analysis: [
          { label: '창의성' },
          { label: '독립성' },
          { label: '논리성' }
        ]
      },
      EG: {
        name: '에겐 타입',
        subtitle: '사교적이고 감정적인 조화형',
        traits: [
          '뛰어난 공감능력과 소통력',
          '타인의 감정을 잘 이해함',
          '협력과 조화를 중시함',
          '사회적 관계를 소중히 여김',
          '직관적이고 감정적인 판단'
        ],
        description: '에겐 타입은 뛰어난 공감능력과 소통력을 바탕으로 타인과의 관계에서 조화를 이루는 것을 중요하게 생각하는 성격입니다. 감정적인 교감을 통해 깊은 인간관계를 형성하며, 직관적인 판단력이 뛰어납니다.',
        analysis: [
          { label: '공감능력' },
          { label: '사교성' },
          { label: '조화성' }
        ]
      },
      'TE-EG': {
        name: '테토-에겐 혼합형',
        subtitle: '균형잡힌 다재다능형',
        traits: [
          '논리와 감정의 균형',
          '상황에 따른 유연한 대응',
          '창의성과 공감능력을 모두 보유',
          '독립적이면서도 협력적',
          '다양한 관점에서 문제 접근'
        ],
        description: '테토-에겐 혼합형은 논리적 사고와 감정적 공감능력을 모두 갖춘 균형잡힌 성격입니다. 상황에 따라 창의적 사고와 협력적 태도를 적절히 활용하여 다양한 환경에서 뛰어난 적응력을 보입니다.',
        analysis: [
          { label: '균형성' },
          { label: '적응력' },
          { label: '다재다능' }
        ]
      }
    },
    
    questions: [
      {
        question: "새로운 프로젝트를 시작할 때, 당신은 어떤 방식을 선호하나요?",
        options: [
          "체계적인 계획을 세우고 단계별로 진행한다",
          "팀원들과 함께 아이디어를 나누며 진행한다",
          "직감에 따라 유연하게 진행한다",
          "독창적인 아이디어부터 떠올린다"
        ]
      },
      {
        question: "친구들과의 모임에서 당신의 역할은 무엇인가요?",
        options: [
          "분위기를 이끌고 모든 사람이 참여하도록 한다",
          "재미있는 아이디어나 게임을 제안한다",
          "조용히 대화를 듣고 필요할 때 의견을 말한다",
          "다른 사람들의 감정을 살피고 배려한다"
        ]
      },
      {
        question: "어려운 결정을 내려야 할 때, 당신은 무엇을 가장 중요하게 생각하나요?",
        options: [
          "논리적 분석과 객관적 데이터",
          "관련된 사람들의 감정과 의견",
          "장기적인 관점에서의 최적해",
          "모든 사람이 만족할 수 있는 방법"
        ]
      },
      {
        question: "스트레스를 받을 때 당신은 어떻게 해소하나요?",
        options: [
          "혼자만의 시간을 가지며 생각을 정리한다",
          "가까운 사람들과 대화를 나눈다",
          "새로운 활동이나 취미를 시작한다",
          "사람들과 함께하는 활동에 참여한다"
        ]
      },
      {
        question: "팀 프로젝트에서 갈등이 생겼을 때, 당신의 대응 방식은?",
        options: [
          "문제의 원인을 분석하고 해결책을 제시한다",
          "모든 사람의 의견을 듣고 중재한다",
          "창의적인 대안을 찾아 제안한다",
          "분위기를 부드럽게 만들려고 노력한다"
        ]
      },
      {
        question: "새로운 사람들과 만날 때 당신의 행동은?",
        options: [
          "먼저 다가가서 자연스럽게 대화를 시작한다",
          "상대방을 관찰한 후 공통점을 찾아 접근한다",
          "상대방이 먼저 다가오기를 기다린다",
          "친근한 분위기를 만들어 편안하게 한다"
        ]
      },
      {
        question: "업무나 공부할 때 선호하는 환경은?",
        options: [
          "조용하고 정돈된 개인 공간",
          "사람들과 함께할 수 있는 공동 공간",
          "자유롭게 움직일 수 있는 유연한 공간",
          "편안하고 따뜻한 분위기의 공간"
        ]
      },
      {
        question: "실패나 실수를 했을 때 당신의 반응은?",
        options: [
          "원인을 분석하고 개선 방안을 찾는다",
          "주변 사람들에게 조언을 구한다",
          "새로운 접근 방식을 시도해본다",
          "감정을 공유하고 위로받고 싶어한다"
        ]
      },
      {
        question: "여가 시간을 보내는 방법 중 가장 매력적인 것은?",
        options: [
          "책을 읽거나 새로운 기술을 배우기",
          "친구들과 함께 즐거운 시간 보내기",
          "창작 활동이나 개인 프로젝트 하기",
          "사회적 모임이나 이벤트 참여하기"
        ]
      },
      {
        question: "미래에 대한 계획을 세울 때 당신의 방식은?",
        options: [
          "구체적이고 세부적인 계획을 수립한다",
          "주변 사람들과 상의하며 계획을 만든다",
          "큰 그림을 그리고 유연하게 조정한다",
          "감정과 직감을 바탕으로 방향을 정한다"
        ]
      },
      {
        question: "중요한 발표나 프레젠테이션을 준비할 때?",
        options: [
          "데이터와 논리적 구조에 집중한다",
          "청중의 관심과 반응을 고려한다",
          "독창적인 아이디어로 차별화한다",
          "감정적 공감대를 형성하려고 한다"
        ]
      },
      {
        question: "새로운 도전이나 기회가 생겼을 때?",
        options: [
          "철저히 분석한 후 신중하게 결정한다",
          "주변 사람들의 의견을 들어본다",
          "직감적으로 좋다고 생각하면 도전한다",
          "독특하고 흥미로운 기회라면 시도한다"
        ]
      },
      {
        question: "타인의 조언이나 피드백을 받을 때?",
        options: [
          "객관적이고 건설적인 의견을 선호한다",
          "따뜻하고 격려적인 방식을 선호한다",
          "구체적인 개선 방안이 포함된 피드백",
          "감정적 지지와 함께하는 조언"
        ]
      },
      {
        question: "그룹 활동에서 당신이 맡고 싶은 역할은?",
        options: [
          "전략을 수립하고 계획을 세우는 역할",
          "팀원들을 격려하고 동기부여하는 역할",
          "창의적 아이디어를 제공하는 역할",
          "팀의 화합을 도모하는 역할"
        ]
      },
      {
        question: "갈등 상황에서 당신의 우선순위는?",
        options: [
          "문제의 근본 원인을 해결하는 것",
          "관계를 유지하며 상처받지 않게 하는 것",
          "효율적이고 논리적인 해결책 찾기",
          "모든 당사자가 만족할 수 있는 방법"
        ]
      },
      {
        question: "성취감을 느끼는 순간은 언제인가요?",
        options: [
          "복잡한 문제를 해결했을 때",
          "다른 사람에게 도움이 되었을 때",
          "독창적인 아이디어가 인정받을 때",
          "팀이 하나가 되어 목표를 달성할 때"
        ]
      },
      {
        question: "변화에 대한 당신의 태도는?",
        options: [
          "신중하게 분석한 후 적응한다",
          "주변 사람들과 함께 적응해나간다",
          "새로운 가능성으로 여기고 환영한다",
          "감정적으로 받아들이고 적응한다"
        ]
      },
      {
        question: "학습이나 성장에 있어서 중요하게 생각하는 것은?",
        options: [
          "체계적이고 논리적인 학습 과정",
          "타인과의 상호작용을 통한 학습",
          "독창적이고 혁신적인 접근법",
          "감정적 공감을 통한 깊이 있는 이해"
        ]
      },
      {
        question: "리더십을 발휘할 때 당신의 스타일은?",
        options: [
          "명확한 비전과 전략을 제시한다",
          "팀원들을 격려하고 동기부여한다",
          "혁신적인 아이디어로 이끈다",
          "감정적 유대감을 바탕으로 이끈다"
        ]
      },
      {
        question: "인생에서 가장 중요하게 생각하는 가치는?",
        options: [
          "개인의 성장과 자아실현",
          "타인과의 관계와 사회적 기여",
          "창의적 표현과 혁신",
          "사랑과 공감, 정서적 연결"
        ]
      }
    ]
  },
  
  en: {
    title: 'Teto-Egen Personality Type Test',
    subtitle: 'Discover and understand your unique personality. This test analyzes your thinking patterns, behavioral tendencies, and worldview perspective.',
    timeRequired: 'Time Required',
    timeValue: 'About 10-15 minutes',
    questionCount: 'Questions',
    questionValue: '20 total questions',
    accuracy: 'Accuracy',
    accuracyValue: 'Reliable results',
    startTest: 'Start Test',
    disclaimer: '* Please answer honestly for accurate results',
    
    testTitle: 'Personality Type Test',
    previous: 'Previous',
    next: 'Next',
    
    testComplete: 'Test Complete!',
    resultSubtitle: 'Your Teto-Egen personality type results',
    keyTraits: 'Key Traits',
    tendencyAnalysis: 'Tendency Analysis',
    detailedDescription: 'Detailed Description',
    retakeTest: 'Retake Test',
    shareResult: 'Share Test Results',
    loadingResults: 'Loading results...',
    resultsNotFound: 'Results not found',
    resultsNotFoundDesc: 'Unable to load test results. Please retake the test.',
    retakeTestButton: 'Retake Test',
    shareComplete: 'Share Complete',
    shareCompleteDesc: 'Results copied to clipboard!',
    shareFailed: 'Share Failed',
    shareFailedDesc: 'Failed to share results.',
    
    personalityTypes: {
      TE: {
        name: 'Teto Type',
        subtitle: 'Creative and Independent Thinker',
        traits: [
          'Original and creative thinking',
          'Independent and free-spirited nature',
          'Prefers logical analysis',
          'Open to new ideas',
          'Systematic and planned approach'
        ],
        description: 'The Teto type is characterized by original and creative thinking, preferring to view problems from new perspectives without being constrained by conventional frameworks. They excel at solving complex problems through logical and systematic approaches.',
        analysis: [
          { label: 'Creativity' },
          { label: 'Independence' },
          { label: 'Logic' }
        ]
      },
      EG: {
        name: 'Egen Type',
        subtitle: 'Social and Emotionally Harmonious',
        traits: [
          'Excellent empathy and communication skills',
          'Good understanding of others\' emotions',
          'Values cooperation and harmony',
          'Cherishes social relationships',
          'Intuitive and emotional judgment'
        ],
        description: 'The Egen type values creating harmony in relationships with others based on excellent empathy and communication skills. They form deep human connections through emotional bonds and possess outstanding intuitive judgment.',
        analysis: [
          { label: 'Empathy' },
          { label: 'Sociability' },
          { label: 'Harmony' }
        ]
      },
      'TE-EG': {
        name: 'Teto-Egen Mixed Type',
        subtitle: 'Balanced and Versatile',
        traits: [
          'Balance of logic and emotion',
          'Flexible response to situations',
          'Possesses both creativity and empathy',
          'Independent yet cooperative',
          'Approaches problems from various perspectives'
        ],
        description: 'The Teto-Egen mixed type is a balanced personality that combines logical thinking with emotional empathy. They show excellent adaptability in various environments by appropriately utilizing creative thinking and cooperative attitudes depending on the situation.',
        analysis: [
          { label: 'Balance' },
          { label: 'Adaptability' },
          { label: 'Versatility' }
        ]
      }
    },
    
    questions: [
      {
        question: "When starting a new project, which approach do you prefer?",
        options: [
          "Set up a systematic plan and proceed step by step",
          "Share ideas with team members and proceed together",
          "Proceed flexibly according to intuition",
          "Start by coming up with original ideas"
        ]
      },
      {
        question: "What is your role in gatherings with friends?",
        options: [
          "Lead the atmosphere and make sure everyone participates",
          "Suggest fun ideas or games",
          "Listen quietly and speak up when needed",
          "Look after others' feelings and show consideration"
        ]
      },
      {
        question: "When making difficult decisions, what do you consider most important?",
        options: [
          "Logical analysis and objective data",
          "Feelings and opinions of people involved",
          "Optimal solution from a long-term perspective",
          "A way that satisfies everyone"
        ]
      },
      {
        question: "How do you relieve stress?",
        options: [
          "Have alone time to organize thoughts",
          "Talk with close people",
          "Start new activities or hobbies",
          "Participate in activities with others"
        ]
      },
      {
        question: "When conflicts arise in team projects, how do you respond?",
        options: [
          "Analyze the cause and suggest solutions",
          "Listen to everyone and mediate",
          "Find and suggest creative alternatives",
          "Try to soften the atmosphere"
        ]
      },
      {
        question: "How do you behave when meeting new people?",
        options: [
          "Approach first and start conversation naturally",
          "Observe them first, then approach by finding common ground",
          "Wait for them to approach first",
          "Create a friendly atmosphere to make them comfortable"
        ]
      },
      {
        question: "What environment do you prefer for work or study?",
        options: [
          "Quiet and organized personal space",
          "Shared space where you can be with people",
          "Flexible space where you can move freely",
          "Comfortable and warm atmosphere"
        ]
      },
      {
        question: "How do you react to failures or mistakes?",
        options: [
          "Analyze the cause and find improvement plans",
          "Seek advice from people around you",
          "Try new approaches",
          "Want to share emotions and receive comfort"
        ]
      },
      {
        question: "What's most appealing about spending leisure time?",
        options: [
          "Reading books or learning new skills",
          "Having fun times with friends",
          "Creative activities or personal projects",
          "Participating in social gatherings or events"
        ]
      },
      {
        question: "How do you plan for the future?",
        options: [
          "Establish specific and detailed plans",
          "Make plans by consulting with people around you",
          "Draw the big picture and adjust flexibly",
          "Set direction based on emotions and intuition"
        ]
      },
      {
        question: "When preparing important presentations?",
        options: [
          "Focus on data and logical structure",
          "Consider audience interest and reactions",
          "Differentiate with original ideas",
          "Try to form emotional connections"
        ]
      },
      {
        question: "When new challenges or opportunities arise?",
        options: [
          "Analyze thoroughly before making careful decisions",
          "Listen to opinions of people around you",
          "Challenge if it feels intuitively good",
          "Try if it's a unique and interesting opportunity"
        ]
      },
      {
        question: "When receiving advice or feedback from others?",
        options: [
          "Prefer objective and constructive opinions",
          "Prefer warm and encouraging approaches",
          "Feedback that includes specific improvement plans",
          "Advice accompanied by emotional support"
        ]
      },
      {
        question: "What role would you like to take in group activities?",
        options: [
          "Role of establishing strategies and making plans",
          "Role of encouraging and motivating team members",
          "Role of providing creative ideas",
          "Role of promoting team harmony"
        ]
      },
      {
        question: "What's your priority in conflict situations?",
        options: [
          "Solving the root cause of the problem",
          "Maintaining relationships without hurting anyone",
          "Finding efficient and logical solutions",
          "Finding ways that satisfy all parties"
        ]
      },
      {
        question: "When do you feel a sense of achievement?",
        options: [
          "When solving complex problems",
          "When being helpful to others",
          "When original ideas are recognized",
          "When the team comes together to achieve goals"
        ]
      },
      {
        question: "What's your attitude toward change?",
        options: [
          "Adapt after careful analysis",
          "Adapt together with people around you",
          "Welcome it as new possibilities",
          "Accept and adapt emotionally"
        ]
      },
      {
        question: "What do you consider important in learning and growth?",
        options: [
          "Systematic and logical learning process",
          "Learning through interaction with others",
          "Original and innovative approaches",
          "Deep understanding through emotional empathy"
        ]
      },
      {
        question: "What's your leadership style?",
        options: [
          "Present clear vision and strategy",
          "Encourage and motivate team members",
          "Lead with innovative ideas",
          "Lead based on emotional bonds"
        ]
      },
      {
        question: "What values do you consider most important in life?",
        options: [
          "Personal growth and self-realization",
          "Relationships with others and social contribution",
          "Creative expression and innovation",
          "Love, empathy, and emotional connection"
        ]
      }
    ]
  }
};

export class I18n {
  private static language: Language = 'ko';
  
  static setLanguage(lang: Language) {
    this.language = lang;
    localStorage.setItem('teto-egen-language', lang);
  }
  
  static getLanguage(): Language {
    const saved = localStorage.getItem('teto-egen-language') as Language;
    return saved || this.language;
  }
  
  static t(): Translations {
    const currentLang = this.getLanguage();
    return translations[currentLang];
  }
  
  static init() {
    const saved = localStorage.getItem('teto-egen-language') as Language;
    if (saved) {
      this.language = saved;
    }
  }
}