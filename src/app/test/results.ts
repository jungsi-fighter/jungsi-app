// src/app/test/results.ts
'use client';

export interface Dimension {
  label: string;  // 예: '계획형'
  value: number;  // 0~100
}

export interface ResultDescription {
  title: string;           // 예: '체계적 실전파형'
  summary: string;         // 상세 설명
  imageUrl?: string;       // 일러스트 경로 (public/images 이하)
  dimensions: Dimension[]; // 4개 차원 데이터
}

export const resultDescriptions: Record<string, ResultDescription> = {
  ISTJ: {
    title: '체계적 실전파형',
    summary: '분석적이고 계획적인 학습자입니다. 세부 루틴과 체크리스트를 기반으로 공부할 때 최상의 성과를 냅니다.',
    imageUrl: '/images/istj.png',
    dimensions: [
      { label: '계획형', value: 68 },
      { label: '탐색형', value: 32 },
      { label: '논리형', value: 75 },
      { label: '감정형', value: 25 },
    ],
  },
  INFP: {
    title: '의미추구 탐구형',
    summary: '자신의 내면적 의미를 중시하며, 창의적인 학습 방식을 즐겨 시도합니다. 학습 과정에서 감정을 중요하게 여기고 몰입합니다.',
    imageUrl: '/images/infp.png',
    dimensions: [
      { label: '계획형', value: 30 },
      { label: '탐색형', value: 70 },
      { label: '논리형', value: 40 },
      { label: '감정형', value: 60 },
    ],
  },
  ESTP: {
    title: '즉시몰입 전략가형',
    summary: '실전 경험을 통해 학습하는 것을 선호하며, 즉각적인 적용과 도전을 즐깁니다. 유연한 전략 수립이 강점입니다.',
    imageUrl: '/images/estp.png',
    dimensions: [
      { label: '계획형', value: 25 },
      { label: '탐색형', value: 75 },
      { label: '논리형', value: 60 },
      { label: '감정형', value: 40 },
    ],
  },
  ENFJ: {
    title: '공감형 멘토리더',
    summary: '타인과의 상호작용에서 동기를 얻으며, 그룹 학습과 피드백을 중시합니다. 리더십을 발휘해 학습을 이끌어갑니다.',
    imageUrl: '/images/enfj.png',
    dimensions: [
      { label: '계획형', value: 40 },
      { label: '탐색형', value: 60 },
      { label: '논리형', value: 35 },
      { label: '감정형', value: 65 },
    ],
  },
  ISTP: {
    title: '논리 분석가형',
    summary: '혼자서 분석하고 탐구하는 학습 방식을 선호하며, 문제 해결에 강점을 보입니다. 실습과 분석을 통해 지식을 쌓습니다.',
    imageUrl: '/images/istp.png',
    dimensions: [
      { label: '계획형', value: 35 },
      { label: '탐색형', value: 65 },
      { label: '논리형', value: 70 },
      { label: '감정형', value: 30 },
    ],
  },
  ESFP: {
    title: '활력 집중형',
    summary: '에너지를 외부 환경에서 얻으며, 즉각적인 피드백과 변화를 선호합니다. 즐거운 학습 환경으로 집중력을 유지합니다.',
    imageUrl: '/images/esfp.png',
    dimensions: [
      { label: '계획형', value: 20 },
      { label: '탐색형', value: 80 },
      { label: '논리형', value: 30 },
      { label: '감정형', value: 70 },
    ],
  },
  INFJ: {
    title: '이상주의 계획형',
    summary: '미래 목표를 중심으로 계획적으로 학습하며, 의미와 가치를 중요시합니다. 체계적인 접근으로 학습을 완성해 나갑니다.',
    imageUrl: '/images/infj.png',
    dimensions: [
      { label: '계획형', value: 75 },
      { label: '탐색형', value: 25 },
      { label: '논리형', value: 55 },
      { label: '감정형', value: 45 },
    ],
  },
  ENTP: {
    title: '유연한 도전자형',
    summary: '창의적인 아이디어와 융통성을 바탕으로 다양한 학습 전략을 시도합니다. 새로운 접근법을 탐색하며 학습의 폭을 넓힙니다.',
    imageUrl: '/images/entp.png',
    dimensions: [
      { label: '계획형', value: 30 },
      { label: '탐색형', value: 70 },
      { label: '논리형', value: 60 },
      { label: '감정형', value: 40 },
    ],
  },
};
