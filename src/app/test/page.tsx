'use client';
import Layout from '../../components/Layout';
import { useState } from 'react';
import MotionDiv from './MotionDiv';
import { AnimatePresence } from 'framer-motion';
import { questions, Question } from './questions';
import ProgressBar from './ProgressBar';

export default function TestPage() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const question: Question = questions[index];

  const handleAnswer = (direction: string) => {
    const newAnswers = { ...answers, [question.id]: direction };
    setAnswers(newAnswers);

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      const result = calculateResult(newAnswers);
      alert(`당신의 유형은 ${result} 입니다.`);
    }
  };

  const calculateResult = (ans: { [key: number]: string }) => {
    const counts = { I: 0, E: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    questions.forEach(q => {
      const a = ans[q.id];
      if (a) counts[a as keyof typeof counts]++;
    });
    return (
      (counts.I >= counts.E ? 'I' : 'E') +
      (counts.S >= counts.N ? 'S' : 'N') +
      (counts.T >= counts.F ? 'T' : 'F') +
      (counts.J >= counts.P ? 'J' : 'P')
    );
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center p-4">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* 헤더: 로고 + 진행률 */}
          <div className="px-6 py-4 bg-indigo-600">
            <h1 className="text-2xl font-bold text-white">정시파이터 학업능력 검사</h1>
            <ProgressBar current={index + 1} total={questions.length} />
          </div>

          {/* 질문 카드 */}
          <div className="p-8">
            <AnimatePresence exitBeforeEnter>
              <MotionDiv
                key={question.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <p className="text-gray-700 text-lg leading-relaxed">
                  {index + 1}. {question.text}
                </p>

                <div className="flex gap-4">
                  <button
                    onClick={() => handleAnswer(question.direction)}
                    className="flex-1 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-medium shadow-md transform active:scale-95 transition"
                  >
                    그렇다
                  </button>
                  <button
                    onClick={() => handleAnswer(oppositeDirection(question.direction))}
                    className="flex-1 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium shadow-inner transform active:scale-95 transition"
                  >
                    아니다
                  </button>
                </div>
              </MotionDiv>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function oppositeDirection(dir: string): string {
  const map: Record<string, string> = {
    I: 'E', E: 'I',
    S: 'N', N: 'S',
    T: 'F', F: 'T',
    J: 'P', P: 'J',
  };
  return map[dir] || dir;
}
