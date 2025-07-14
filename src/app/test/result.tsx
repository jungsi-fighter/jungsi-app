// src/app/test/result.tsx
'use client';

import Layout from '../../components/Layout';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import ProgressBar from './ProgressBar';
import { resultDescriptions, ResultDescription } from './results';

// MotionImg: framer-motion의 img 타입 이슈 해결용 래퍼
type ImgProps = HTMLMotionProps<'img'> & {
  src: string;
  alt?: string;
  className?: string;
};
const MotionImg = motion.img as ForwardRefExoticComponent<ImgProps & RefAttributes<HTMLImageElement>>;

// MotionP: framer-motion의 p 타입 이슈 해결용 래퍼
type PProps = HTMLMotionProps<'p'> & {
  children?: React.ReactNode;
  className?: string;
};
const MotionP = motion.p as ForwardRefExoticComponent<PProps & RefAttributes<HTMLParagraphElement>>;

export default function ResultPage() {
  const searchParams = useSearchParams();
  const typeParam = (searchParams.get('type') || 'ISTJ').toUpperCase();
  const result: ResultDescription = resultDescriptions[typeParam] || resultDescriptions['ISTJ'];

  return (
    <Layout>
      <div className="min-h-screen bg-indigo-50 flex items-center justify-center p-6">
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* 헤더 */}
          <div className="px-8 py-6 bg-indigo-600">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              당신의 유형: <span className="text-yellow-300">{typeParam}</span>
            </h2>
            <p className="mt-1 text-indigo-200 text-sm">{result.title}</p>
          </div>

          {/* 본문 */}
          <div className="px-8 py-6 space-y-6">
            {/* 일러스트 (선택) */}
            {result.imageUrl && (
              <MotionImg
                src={result.imageUrl}
                alt={result.title}
                className="mx-auto w-40 h-40 object-cover rounded-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            )}

            {/* 4개 차원별 막대 */}
            {result.dimensions.map((dim) => (
              <div key={dim.label} className="flex items-center gap-4">
                <span className="w-14 text-sm font-medium text-gray-700">{dim.label}</span>
                <div className="flex-1">
                  <ProgressBar current={dim.value} total={100} />
                </div>
                <span className="w-10 text-sm font-semibold text-gray-800">{dim.value}%</span>
              </div>
            ))}

            {/* 요약 문구 */}
            <MotionP
              className="mt-4 text-gray-700 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {result.summary}
            </MotionP>

            {/* CTA 버튼 */}
            <div className="mt-6 flex gap-4">
              <button className="flex-1 py-3 bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg font-medium shadow-md transform active:scale-95 transition">
                결과 공유하기
              </button>
              <button className="flex-1 py-3 border border-yellow-400 hover:bg-yellow-50 text-yellow-600 rounded-lg font-medium shadow-inner transform active:scale-95 transition">
                상담 신청하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
