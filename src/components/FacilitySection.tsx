// components/FacilitySection.jsx
import { useState, useEffect, useRef } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function FacilitySection() {
  const images = [
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbgMgqK%2FbtrV5Co9LHj%2FM99XWODx4l0yB6wD2kQLJK%2Fimg.jpg",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbWGP4L%2FbtrV6dPWMFE%2FIMsjEVFLKjBvd38BmAKGi1%2Fimg.jpg",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FlKKA8%2FbtrU440oWc0%2FISDYUVww4Vf7cpXfFPerW1%2Fimg.jpg",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbAstzb%2FbtrU54636lL%2FHQSZ1bKmSZMtRQoHPUjfek%2Fimg.jpg",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtMoD0%2FbtrU1oL7jpo%2F9tsJgXb2B4j3lH4Gtb19Hk%2Fimg.jpg",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb3wqD7%2FbtrU2KH27zX%2FuVnJ4KUMw2qw4isH3QNaKk%2Fimg.jpg",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FrDV9Y%2FbtrU1qC86Ji%2FwRXAHhkMYYI7Ts6Dg1eKZK%2Fimg.jpg",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FrfbXS%2FbtrUYPXKTiI%2FdI4ETC0ZdIktGZ68lIHmU1%2Fimg.jpg"
  ]

  const [index, setIndex] = useState(0)
  const len = images.length
  const intervalRef = useRef(null)

  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  useEffect(() => {
    // 매 5초마다 자동 슬라이드
    intervalRef.current = setInterval(() => {
      setIndex(i => (i + 1) % len)
    }, 5000)
    return () => clearInterval(intervalRef.current)
  }, [len])

  const prev = () => {
    clearInterval(intervalRef.current)
    setIndex(i => (i - 1 + len) % len)
  }
  const next = () => {
    clearInterval(intervalRef.current)
    setIndex(i => (i + 1) % len)
  }

  return (
    <section className="facility-section" data-aos="fade-up">
      <div className="facility-slider">
        <div
          className="facility-image-wrapper"
          style={{
            width: '100%',
            height: '400px',
            overflow: 'hidden',
            borderRadius: '10px'
          }}
        >
          <img
            src={images[index]}
            alt="시설 이미지"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '10px'
            }}
          />
        </div>
        <button className="arrow prev" onClick={prev}>‹</button>
        <button className="arrow next" onClick={next}>›</button>
      </div>

      <div className="facility-text" data-aos="fade-right">
        <h2>쾌적한 생활 환경</h2>
        <h3>학습에만 집중할 수 있도록</h3>
        <p>
          수업 하는 교실 외에 전문 학습 공간과<br />
          SKY대학 강사진을 비롯하여 명문대 진학 선배 멘토들이 상주하며<br />
          학생들의 학습 관리를 최우선으로 신경씁니다.
        </p>
      </div>
    </section>
  )
}
