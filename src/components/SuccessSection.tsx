import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function SuccessSection() {
  const stats = [
    { label: '메디컬', value: 86 },
    { label: '서울대', value: 55 },
    { label: '연고대', value: 212 },
    { label: '교육대', value: 53 },
  ]

  const videos = [
    { id: 'pUm5aSSAad4', name: '졸업생 이민호', desc: '의대→연세대 의예과 합격 스토리' },
    { id: 'RLx8yi2dpq0', name: '졸업생 김신록', desc: '꾸준한 순공 라인드 스터디 성공기' },
    { id: 'lPmE8pVG0y0', name: '졸업생 서지훈', desc: '7등급→고려대 수학교육과 대역전' },
    { id: 'mzJurf5H-RU', name: '졸업생 이한나', desc: '밝은 에너지로 슬럼프 극복' },
    { id: 'cIdn3vXthHo', name: '졸업생 구동욱', desc: '지방 학생의 대치동 재수기' },
    { id: '8wQyEXLABKg', name: '졸업생 구현준', desc: '어려운 환경 극복 최종합격' },
  ]

  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    AOS.init({ once: true })
    stats.forEach((stat, idx) => {
      let current = 0
      const end = stat.value
      const step = Math.ceil(end / 20)
      const timer = setInterval(() => {
        current += step
        if (current >= end) {
          current = end
          clearInterval(timer)
        }
        setCounts(prev => {
          const next = [...prev]
          next[idx] = current
          return next
        })
      }, 50)
    })
  }, [])

  return (
    <section className="py-20 bg-white" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">명문대 진학 기적의 주인공</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
          {stats.map((s, i) => (
            <div key={s.label} className="bg-gray-100 p-6 rounded-lg shadow">
              <p className="text-4xl font-extrabold">{counts[i]}</p>
              <p className="mt-2">{s.label} 합격자 인원</p>
            </div>
          ))}
        </div>
        <h2 className="text-3xl font-bold mb-8">수강생 영상후기</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {videos.map((v, i) => (
            <div
              key={v.id}
              className="overflow-hidden rounded-lg shadow hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="relative pb-[56.25%]">
                <iframe
                  className="absolute inset-0 w-full h-full filter blur-sm opacity-75 hover:blur-0 hover:opacity-100 transition"
                  src={`https://www.youtube.com/embed/${v.id}?enablejsapi=1`}
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold mb-1">{v.name}</h4>
                <p className="text-gray-600 text-sm">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
