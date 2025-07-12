// components/TabsSection.jsx
import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const tabs = [
  { id: 'curriculum', label: '수능 커리큘럼' },
  { id: 'mentoring',  label: '멘토링 시스템' },
  { id: 'strategy',   label: '실전 전략' },
  { id: 'teachers',   label: '강사/성과' },
  { id: 'ngram',   label: '엔그램 정리' },
  { id: 'ipsi',   label: '입시컨설팅' }
]

const content = {
  curriculum: {
    title: '수능 1등급을 위한 정공법',
    text:  '기출 → 변형 → 고난도 유형, 수능 흐름에 맞춘 구조화된 수업 설계 수능 출제 경향을 정확히 반영한 커리큘럼으로 실전처럼 훈련합니다. 소수정예 수업을 통해 진도를 유연하게 조절하고, 학생별 약점을 정밀하게 공략하여 최상의 결과를 이끌어냅니다.',
    media: { type: 'image', src: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbpRkLC%2FbtsOclOrVHC%2FKWGAKIIPKnPtHoFyRRUtG1%2Fimg.png', alt: '커리큘럼 이미지' }
  },
  mentoring: {
    title: '선배 멘토가 함께하는 성장 루틴',
    text:  '{혼자 하는 공부}에서 {함께 성장하는 학습}으로 서울대·연대·고대 선배 멘토들이 플래너 피드백과 멘탈 케어를 통해 주간 루틴을 함께 정비하고, 방향을 함께 고민합니다. 자기주도 학습은, 혼자가 아닌 {좋은 동반자}와 함께할 때 시작됩니다.',
    media: { type: 'image', src: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FLod1m%2FbtsOaG0YHpT%2FgHOYB2blUKGUkT2ALAtnNK%2Fimg.png', alt: '멘토링 영상' }
  },
  strategy: {
    title: '실전에서 통하는 고난도 전략',
    text:  '킬러문항 조건 분석부터 실전 시뮬레이션까지, 전략적 사고력을 훈련합니다. 수능 수학의 핵심은 단순 풀이가 아닌 조건을 읽는 사고력과 전략적 시간 관리입니다. 출제자의 의도를 파악하는 킬러문항 분석 훈련, 시간 분배 전략, 그리고 반복적인 실전 모의 시뮬레이션을 통해 실전에서 통하는 수학적 사고 흐름을 완성합니다.',
    media: { type: 'image', src: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F48hkp%2FbtsOcCCrKLT%2FmftKnbOMdLIZZr9qhJkXok%2Fimg.png', alt: '멘토링 영상' }
  },
  teachers: {
    title: '강사진과 시스템의 시너지',
    text:  '실전 훈련에 강한 강사진 + 전략적 학습 시스템 = 성과의 공식 수능을 아는 강사, 학생을 끝까지 책임지는 시스템, 그 둘이 만나 확실한 성장을 이끕니다.',
    media: { type: 'image', src: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FEe5Ed%2FbtsOcEmJN4F%2FKCWkxiguiGfgTeDwpXnAL1%2Fimg.png', alt: '멘토링 영상' }
  },
  ngram: {
    title: '엔그램 정리 – ‘내 머릿속 교과서’를 만든다',
    text:  '공부한 내용을 스스로 정리하고 단권화하는 자기화 훈련 수업 내용을 그대로 두지 않고, 직접 정리하고 구조화하며, 나만의 단권화 노트로 다시 정리하는 과정은 기억을 강화하고 사고 흐름을 내 것으로 만드는 최고의 방법입니다.‘암기’가 아닌 ‘이해’, 그리고 ‘필기’가 아닌 ‘사고력’으로 남깁니다.',
    media: { type: 'image', src: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FdWrk94%2FbtsO1arC02D%2FAAAAAAAAAAAAAAAAAAAAAP1c8UcC27uSdvUBfbODSvXXoV8BGZ-vprcTC3Z68C_p%2Fimg.jpg%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1753973999%26allow_ip%3D%26allow_referer%3D%26signature%3DKlt7113Qmuw8tMV4sW%252FQ%252BhVZm5Q%253D', alt: '멘토링 영상' }
  },
  ipsi: {
    title: '전략이 있는 정시 준비',
    text:  '입시 전문가의 1:1 맞춤 컨설팅으로 시작합니다 매 회차 모의고사를 분석하여 학생의 위치, 강점, 약점을 정확히 파악하고 정시 목표 대학까지의 실질적 전략을 함께 설계합니다. 결과 중심의 컨설팅으로 혼자서는 도달하기 어려운 성과를 이끌어냅니다',
    media: { type: 'image', src: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2Fed8g01%2FbtsNJol58iD%2FAAAAAAAAAAAAAAAAAAAAAHbvl-j6Mu9DSBnHdCUq4fk5WwUDOxfSBO6Gs0RFmsrZ%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1753973999%26allow_ip%3D%26allow_referer%3D%26signature%3DPsvlwGw8cFno6tz9ClYCrq1xxYo%253D', alt: '멘토링 영상' }
  }
  // 이하 생략...
}

export default function TabsSection() {
  const [active, setActive] = useState('curriculum')

  useEffect(() => { AOS.init({ once: true }) }, [])

  return (
    <section className="tabs bg-gray-50 py-20" data-aos="fade-up">
      <div className="container mx-auto px-4" data-aos="flip-right">
        {/* --- 탭 버튼 --- */}
        <ul className="tab-nav flex flex-wrap justify-center gap-6 mb-12" role="tablist">
          {tabs.map(t => (
            <li key={t.id}>
              <button
                onClick={() => setActive(t.id)}
                className={
                  `px-6 py-3 rounded-lg font-semibold text-lg transition ` +
                  (active === t.id
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-red-50 hover:text-red-600')
                }
                role="tab"
                aria-selected={active === t.id}
              >
                {t.label}
              </button>
            </li>
          ))}
        </ul>

        {/* --- 탭 콘텐츠 --- */}
        <div className="tab-content" data-aos="flip-up">
          {content[active] && (
            <div role="tabpanel">
              {/* 여기를 flex 로 감싸면 데스크탑에선 좌우, 모바일에선 위아래 */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* 좌측 텍스트 */}
                <div className="lg:w-1/2 text-center lg:text-left">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                    {content[active].title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {content[active].text}
                  </p>
                </div>

                {/* 우측 미디어 */}
                <div className="lg:w-1/2 w-full">
                  {content[active].media.type === 'video' ? (
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        src={content[active].media.src}
                        title={content[active].media.alt}
                        allow="autoplay; encrypted-media"
                        className="w-full h-full rounded-lg shadow-lg"
                      />
                    </div>
                  ) : (
                    <img
                      src={content[active].media.src}
                      alt={content[active].media.alt}
                      className="w-full rounded-lg shadow-lg object-cover"
                    />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
