import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const list = [
  {
    title: '입시 컨설팅',
    desc: '전문 매니저와 함께 정시 맞춤 학습 플랜을 설계합니다.\n목표 대학까지의 로드맵을 구체적으로 제시합니다.'
  },
  {
    title: '실전 모의고사',
    desc: '주기적인 실전 테스트로 실수 없이 훈련합니다.\n해설 강의와 오답 분석을 통해 실전 감각을 강화합니다.'
  },
  {
    title: '맞춤 피드백',
    desc: '학습 태도부터 생활 관리까지 전반적으로 점검합니다.\n학생별 강약점을 반영한 맞춤형 피드백을 제공합니다.'
  },
  {
    title: '학습관 관리',
    desc: '수업이 끝난 후에도 자습까지 자연스럽게 이어집니다.\n학습관에서의 집중 루틴으로 실력을 완성합니다.'
  }
];

export default function Features() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <section id="features" className="py-20 bg-gray-100">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        ref={ref}
      >정시파이터 주요 차별점</motion.h2>
<div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
  {list.map((item, idx) => (
    <motion.div
      key={idx}
      className="w-full bg-white rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}