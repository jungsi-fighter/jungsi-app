// src/app/test/questions.tsx

export interface Question {
  id: number;
  text: string;
  dimension: 'IE' | 'SN' | 'TF' | 'JP';
  direction: 'I' | 'E' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
}

export const questions: Question[] = [
  // 정보처리 방식 (I vs E)
  { id: 1,  text: '나는 혼자 정리하면서 개념을 내 것으로 만드는 편이다.',   dimension: 'IE', direction: 'I' },
  { id: 2,  text: '친구에게 설명하면 내가 더 잘 이해된다.',                 dimension: 'IE', direction: 'E' },
  { id: 3,  text: '자료를 한 번에 정리해두면 마음이 놓인다.',             dimension: 'IE', direction: 'I' },
  { id: 4,  text: '직접 풀어봐야 개념이 기억된다.',                       dimension: 'IE', direction: 'E' },
  { id: 5,  text: '개념 노트 만들기를 즐긴다.',                           dimension: 'IE', direction: 'I' },
  { id: 6,  text: '강의 내용을 필기 없이 들어도 잘 이해된다.',           dimension: 'IE', direction: 'E' },

  // 학습 실행 성향 (S vs N)
  { id: 7,  text: '계획된 루틴이 있어야 공부가 잘 된다.',                 dimension: 'SN', direction: 'S' },
  { id: 8,  text: '공부법을 자주 바꾸며 실험해본다.',                     dimension: 'SN', direction: 'N' },
  { id: 9,  text: '하루 일과표를 세부적으로 짠다.',                       dimension: 'SN', direction: 'S' },
  { id: 10, text: '내가 만든 공부 방식이 제일 잘 맞는다.',                 dimension: 'SN', direction: 'N' },
  { id: 11, text: '기본 문제를 반복하면 실력이 늘어난다.',               dimension: 'SN', direction: 'S' },
  { id: 12, text: '한 문제를 여러 방식으로 푸는 걸 좋아한다.',           dimension: 'SN', direction: 'N' },

  // 학습 동기 (T vs F)
  { id: 13, text: '성적 향상이 공부의 가장 큰 보람이다.',               dimension: 'TF', direction: 'T' },
  { id: 14, text: '‘이 공부가 내 미래에 어떤 의미일까’ 생각한다.',      dimension: 'TF', direction: 'F' },
  { id: 15, text: '분석적으로 내 실력을 평가한다.',                     dimension: 'TF', direction: 'T' },
  { id: 16, text: '누군가 응원해줄 때 더 열심히 한다.',                   dimension: 'TF', direction: 'F' },
  { id: 17, text: '과목별 데이터로 진단하는 걸 좋아한다.',               dimension: 'TF', direction: 'T' },
  { id: 18, text: '공부하면서 감정에 따라 몰입 정도가 달라진다.',       dimension: 'TF', direction: 'F' },

  // 시간·자율성 (J vs P)
  { id: 19, text: '공부 시작 전 시간표를 짜는 편이다.',                 dimension: 'JP', direction: 'J' },
  { id: 20, text: '계획이 틀어지면 기분이 나빠진다.',                   dimension: 'JP', direction: 'J' },
  { id: 21, text: '마감이 가까워야 집중력이 오른다.',                   dimension: 'JP', direction: 'P' },
  { id: 22, text: '상황에 따라 공부 순서를 바꾼다.',                     dimension: 'JP', direction: 'P' },
  { id: 23, text: '책상 위가 정돈되어야 집중된다.',                     dimension: 'JP', direction: 'J' },
  { id: 24, text: '자료가 흩어져 있어도 나만의 질서가 있다.',          dimension: 'JP', direction: 'P' },
];
