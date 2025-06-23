import type { Question, PersonalityType } from "@shared/schema";

export const questions: Question[] = [
  {
    id: 1,
    question: "새로운 프로젝트를 시작할 때, 당신은 어떤 방식을 선호하나요?",
    options: [
      { text: "체계적인 계획을 세우고 단계별로 진행한다", type: "TE", weight: 2 },
      { text: "팀원들과 함께 아이디어를 나누며 진행한다", type: "EG", weight: 2 },
      { text: "직감에 따라 유연하게 진행한다", type: "EG", weight: 1 },
      { text: "독창적인 아이디어부터 떠올린다", type: "TE", weight: 1 }
    ]
  },
  {
    id: 2,
    question: "친구들과의 모임에서 당신의 역할은 무엇인가요?",
    options: [
      { text: "분위기를 이끌고 모든 사람이 참여하도록 한다", type: "EG", weight: 2 },
      { text: "재미있는 아이디어나 게임을 제안한다", type: "TE", weight: 1 },
      { text: "조용히 대화를 듣고 필요할 때 의견을 말한다", type: "TE", weight: 1 },
      { text: "다른 사람들의 감정을 살피고 배려한다", type: "EG", weight: 2 }
    ]
  },
  {
    id: 3,
    question: "어려운 결정을 내려야 할 때, 당신은 무엇을 가장 중요하게 생각하나요?",
    options: [
      { text: "논리적 분석과 객관적 데이터", type: "TE", weight: 2 },
      { text: "관련된 사람들의 감정과 의견", type: "EG", weight: 2 },
      { text: "장기적인 관점에서의 최적해", type: "TE", weight: 1 },
      { text: "모든 사람이 만족할 수 있는 방법", type: "EG", weight: 1 }
    ]
  },
  {
    id: 4,
    question: "스트레스를 받을 때 당신은 어떻게 해소하나요?",
    options: [
      { text: "혼자만의 시간을 가지며 생각을 정리한다", type: "TE", weight: 2 },
      { text: "가까운 사람들과 대화를 나눈다", type: "EG", weight: 2 },
      { text: "새로운 활동이나 취미를 시작한다", type: "TE", weight: 1 },
      { text: "사람들과 함께하는 활동에 참여한다", type: "EG", weight: 1 }
    ]
  },
  {
    id: 5,
    question: "팀 프로젝트에서 갈등이 생겼을 때, 당신의 대응 방식은?",
    options: [
      { text: "문제의 원인을 분석하고 해결책을 제시한다", type: "TE", weight: 2 },
      { text: "모든 사람의 의견을 듣고 중재한다", type: "EG", weight: 2 },
      { text: "창의적인 대안을 찾아 제안한다", type: "TE", weight: 1 },
      { text: "분위기를 부드럽게 만들려고 노력한다", type: "EG", weight: 1 }
    ]
  },
  {
    id: 6,
    question: "새로운 사람들과 만날 때 당신의 행동은?",
    options: [
      { text: "먼저 다가가서 자연스럽게 대화를 시작한다", type: "EG", weight: 2 },
      { text: "상대방을 관찰한 후 공통점을 찾아 접근한다", type: "TE", weight: 2 },
      { text: "상대방이 먼저 다가오기를 기다린다", type: "TE", weight: 1 },
      { text: "친근한 분위기를 만들어 편안하게 한다", type: "EG", weight: 1 }
    ]
  },
  {
    id: 7,
    question: "업무나 공부할 때 선호하는 환경은?",
    options: [
      { text: "조용하고 정돈된 개인 공간", type: "TE", weight: 2 },
      { text: "사람들과 함께할 수 있는 공동 공간", type: "EG", weight: 2 },
      { text: "자유롭게 움직일 수 있는 유연한 공간", type: "TE", weight: 1 },
      { text: "편안하고 따뜻한 분위기의 공간", type: "EG", weight: 1 }
    ]
  },
  {
    id: 8,
    question: "실패나 실수를 했을 때 당신의 반응은?",
    options: [
      { text: "원인을 분석하고 개선 방안을 찾는다", type: "TE", weight: 2 },
      { text: "주변 사람들에게 조언을 구한다", type: "EG", weight: 2 },
      { text: "새로운 접근 방식을 시도해본다", type: "TE", weight: 1 },
      { text: "감정을 공유하고 위로받고 싶어한다", type: "EG", weight: 1 }
    ]
  },
  {
    id: 9,
    question: "여가 시간을 보내는 방법 중 가장 매력적인 것은?",
    options: [
      { text: "책을 읽거나 새로운 기술을 배우기", type: "TE", weight: 2 },
      { text: "친구들과 함께 즐거운 시간 보내기", type: "EG", weight: 2 },
      { text: "창작 활동이나 개인 프로젝트 하기", type: "TE", weight: 1 },
      { text: "사회적 모임이나 이벤트 참여하기", type: "EG", weight: 1 }
    ]
  },
  {
    id: 10,
    question: "미래에 대한 계획을 세울 때 당신의 방식은?",
    options: [
      { text: "구체적이고 세부적인 계획을 수립한다", type: "TE", weight: 2 },
      { text: "주변 사람들과 상의하며 계획을 만든다", type: "EG", weight: 2 },
      { text: "큰 그림을 그리고 유연하게 조정한다", type: "TE", weight: 1 },
      { text: "감정과 직감을 바탕으로 방향을 정한다", type: "EG", weight: 1 }
    ]
  },
  {
    id: 11,
    question: "중요한 발표나 프레젠테이션을 준비할 때?",
    options: [
      { text: "데이터와 논리적 구조에 집중한다", type: "TE", weight: 2 },
      { text: "청중의 관심과 반응을 고려한다", type: "EG", weight: 2 },
      { text: "독창적인 아이디어로 차별화한다", type: "TE", weight: 1 },
      { text: "감정적 공감대를 형성하려고 한다", type: "EG", weight: 1 }
    ]
  },
  {
    id: 12,
    question: "새로운 도전이나 기회가 생겼을 때?",
    options: [
      { text: "철저히 분석한 후 신중하게 결정한다", type: "TE", weight: 2 },
      { text: "주변 사람들의 의견을 들어본다", type: "EG", weight: 2 },
      { text: "직감적으로 좋다고 생각하면 도전한다", type: "EG", weight: 1 },
      { text: "독특하고 흥미로운 기회라면 시도한다", type: "TE", weight: 1 }
    ]
  },
  {
    id: 13,
    question: "타인의 조언이나 피드백을 받을 때?",
    options: [
      { text: "객관적이고 건설적인 의견을 선호한다", type: "TE", weight: 2 },
      { text: "따뜻하고 격려적인 방식을 선호한다", type: "EG", weight: 2 },
      { text: "구체적인 개선 방안이 포함된 피드백", type: "TE", weight: 1 },
      { text: "감정적 지지와 함께하는 조언", type: "EG", weight: 1 }
    ]
  },
  {
    id: 14,
    question: "그룹 활동에서 당신이 맡고 싶은 역할은?",
    options: [
      { text: "전략을 수립하고 계획을 세우는 역할", type: "TE", weight: 2 },
      { text: "팀원들을 격려하고 동기부여하는 역할", type: "EG", weight: 2 },
      { text: "창의적 아이디어를 제공하는 역할", type: "TE", weight: 1 },
      { text: "팀의 화합을 도모하는 역할", type: "EG", weight: 1 }
    ]
  },
  {
    id: 15,
    question: "갈등 상황에서 당신의 우선순위는?",
    options: [
      { text: "문제의 근본 원인을 해결하는 것", type: "TE", weight: 2 },
      { text: "관계를 유지하며 상처받지 않게 하는 것", type: "EG", weight: 2 },
      { text: "효율적이고 논리적인 해결책 찾기", type: "TE", weight: 1 },
      { text: "모든 당사자가 만족할 수 있는 방법", type: "EG", weight: 1 }
    ]
  },
  {
    id: 16,
    question: "성취감을 느끼는 순간은 언제인가요?",
    options: [
      { text: "복잡한 문제를 해결했을 때", type: "TE", weight: 2 },
      { text: "다른 사람에게 도움이 되었을 때", type: "EG", weight: 2 },
      { text: "독창적인 아이디어가 인정받을 때", type: "TE", weight: 1 },
      { text: "팀이 하나가 되어 목표를 달성할 때", type: "EG", weight: 1 }
    ]
  },
  {
    id: 17,
    question: "변화에 대한 당신의 태도는?",
    options: [
      { text: "신중하게 분석한 후 적응한다", type: "TE", weight: 2 },
      { text: "주변 사람들과 함께 적응해나간다", type: "EG", weight: 2 },
      { text: "새로운 가능성으로 여기고 환영한다", type: "TE", weight: 1 },
      { text: "감정적으로 받아들이고 적응한다", type: "EG", weight: 1 }
    ]
  },
  {
    id: 18,
    question: "학습이나 성장에 있어서 중요하게 생각하는 것은?",
    options: [
      { text: "체계적이고 논리적인 학습 과정", type: "TE", weight: 2 },
      { text: "타인과의 상호작용을 통한 학습", type: "EG", weight: 2 },
      { text: "독창적이고 혁신적인 접근법", type: "TE", weight: 1 },
      { text: "감정적 공감을 통한 깊이 있는 이해", type: "EG", weight: 1 }
    ]
  },
  {
    id: 19,
    question: "리더십을 발휘할 때 당신의 스타일은?",
    options: [
      { text: "명확한 비전과 전략을 제시한다", type: "TE", weight: 2 },
      { text: "팀원들을 격려하고 동기부여한다", type: "EG", weight: 2 },
      { text: "혁신적인 아이디어로 이끈다", type: "TE", weight: 1 },
      { text: "감정적 유대감을 바탕으로 이끈다", type: "EG", weight: 1 }
    ]
  },
  {
    id: 20,
    question: "인생에서 가장 중요하게 생각하는 가치는?",
    options: [
      { text: "개인의 성장과 자아실현", type: "TE", weight: 2 },
      { text: "타인과의 관계와 사회적 기여", type: "EG", weight: 2 },
      { text: "창의적 표현과 혁신", type: "TE", weight: 1 },
      { text: "사랑과 공감, 정서적 연결", type: "EG", weight: 1 }
    ]
  }
];

export const personalityTypes: Record<string, PersonalityType> = {
  'TE': {
    code: 'TE',
    name: '테토 타입',
    subtitle: '창의적이고 독립적인 사고형',
    icon: 'TE',
    traits: [
      '독창적이고 창의적인 사고',
      '독립적이고 자유로운 성향',
      '논리적 분석을 선호함',
      '새로운 아이디어에 개방적',
      '체계적이고 계획적인 접근'
    ],
    description: '테토 타입은 독창적이고 창의적인 사고를 가진 성격으로, 기존의 틀에 얽매이지 않고 새로운 관점에서 문제를 바라보는 것을 좋아합니다. 논리적이고 체계적인 접근을 통해 복잡한 문제를 해결하는 데 뛰어난 능력을 보입니다.',
    analysis: [
      { label: '창의성', value: 90 },
      { label: '독립성', value: 85 },
      { label: '논리성', value: 88 }
    ],
    attractedTo: {
      type: 'EG',
      name: '에겐 타입',
      description: '테토는 감정적이고 따뜻한 에겐의 공감능력과 사교성에 매력을 느낍니다. 논리적인 테토에게 에겐의 직관적이고 감성적인 면이 보완적 매력으로 작용합니다.'
    }
  },
  'EG': {
    code: 'EG',
    name: '에겐 타입',
    subtitle: '사교적이고 감정적인 조화형',
    icon: 'EG',
    traits: [
      '뛰어난 공감능력과 소통력',
      '타인의 감정을 잘 이해함',
      '협력과 조화를 중시함',
      '사회적 관계를 소중히 여김',
      '직관적이고 감정적인 판단'
    ],
    description: '에겐 타입은 뛰어난 공감능력과 소통력을 바탕으로 타인과의 관계에서 조화를 이루는 것을 중요하게 생각하는 성격입니다. 감정적인 교감을 통해 깊은 인간관계를 형성하며, 직관적인 판단력이 뛰어납니다.',
    analysis: [
      { label: '공감능력', value: 95 },
      { label: '사교성', value: 88 },
      { label: '조화성', value: 92 }
    ],
    attractedTo: {
      type: 'TE',
      name: '테토 타입',
      description: '에겐은 독창적이고 창의적인 테토의 논리적 사고와 독립적인 성향에 매력을 느낍니다. 감정적인 에겐에게 테토의 체계적이고 분석적인 면이 신선하고 매력적으로 다가옵니다.'
    }
  },
  'TE-EG': {
    code: 'TE-EG',
    name: '테토-에겐 혼합형',
    subtitle: '균형잡힌 다재다능형',
    icon: 'MX',
    traits: [
      '논리와 감정의 균형',
      '상황에 따른 유연한 대응',
      '창의성과 공감능력을 모두 보유',
      '독립적이면서도 협력적',
      '다양한 관점에서 문제 접근'
    ],
    description: '테토-에겐 혼합형은 논리적 사고와 감정적 공감능력을 모두 갖춘 균형잡힌 성격입니다. 상황에 따라 창의적 사고와 협력적 태도를 적절히 활용하여 다양한 환경에서 뛰어난 적응력을 보입니다.',
    analysis: [
      { label: '균형성', value: 90 },
      { label: '적응력', value: 87 },
      { label: '다재다능', value: 89 }
    ],
    attractedTo: {
      type: 'TE-EG',
      name: '테토-에겐 혼합형',
      description: '혼합형은 자신과 비슷한 균형잡힌 성향을 가진 사람에게 매력을 느낍니다. 서로의 다면성을 이해하고 상황에 따라 유연하게 대응할 수 있는 파트너를 선호합니다.'
    }
  }
};
