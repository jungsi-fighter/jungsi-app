// components/RollingGallery.jsx
'use client'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function RollingGallery() {
  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  // 한 트랙 당 반복할 이미지 리스트
  const images = [
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FunY51%2FbtrU0t1ezsC%2FThHtCNQUoXJ3Mws85txPLK%2Fimg.jpg",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FlKKA8%2FbtrU440oWc0%2FISDYUVww4Vf7cpXfFPerW1%2Fimg.jpg",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbAstzb%2FbtrU54636lL%2FHQSZ1bKmSZMtRQoHPUjfek%2Fimg.jpg",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbldX7h%2FbtrU55dPzui%2Fdx9YCGkSK1A6oKnZTNUAA0%2Fimg.jpg",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbPny5q%2FbtrU1qwoFDm%2FzeZDDtEj031NSnzsvkKkok%2Fimg.jpg"
  ]

  // seamless loop 용으로 두 번 이어 붙이기
  const trackItems = [...images, ...images]

  return (
    <section className="rolling-gallery" data-aos="fade-up">
      <div className="rolling-track">
        {trackItems.map((src, idx) => (
          <img key={idx} src={src} alt={`rolling-${idx % images.length}`} />
        ))}
      </div>
      <div className="rolling-track reverse" data-aos="fade-up">
        {trackItems.map((src, idx) => (
          <img key={idx} src={src} alt={`rolling-reverse-${idx % images.length}`} />
        ))}
      </div>
    </section>
  )
}
