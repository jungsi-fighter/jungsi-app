// components/OurTeam.jsx
import { useState, useEffect, useRef } from 'react'
import AOS from 'aos'

const teamMembers = [

  {
    name: '수학 권경렬',
    role: '서울대 수학교육 박사',
    img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FznESF%2FbtsBGFLY8eR%2F3NXsnNTxKKxtoQPH6YKjB1%2Fimg.png',
  },
  {
    name: '수학 김윤영',
    role: '연세대 수학교육 석사',
    img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fz6C3c%2FbtsHcQVueTq%2FzsdYUHDwDakRYwayekffrk%2Fimg.png',
  },
  {
    name: '국어 이재호',
    role: '서울대 국어교육과',
    img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FFxwR7%2FbtsBHs6wBZ7%2FrVhAKpamWVEzJ0hKZQV6v1%2Fimg.png',
  },
  {
    name: '국어 권태진',
    role: '서울대 국어교육과',
    img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FooBCe%2FbtsBGwO2Zl4%2FzDOLRbEMksqMYaD7D7KJZk%2Fimg.png',
  },
  {
    name: '영어 심우철',
    role: '서울대 영어교육과',
    img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FsktvC%2FbtsBG4LnxNw%2FaOGtv4yeUyPDgBpZzTNhZK%2Fimg.png',
  },
  {
    name: '영어 이학수',
    role: '고려대 영어교육 박사',
    img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcEk60Z%2FbtsObK8loLB%2FK4yn0wfPPlrlCJKxIRhXtk%2Fimg.png',
  },
]

export default function OurTeam() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const intervalRef = useRef(null)
  
    const prev = () =>
      setCurrentIndex(i => (i - 1 + teamMembers.length) % teamMembers.length)
    const next = () =>
      setCurrentIndex(i => (i + 1) % teamMembers.length)
    const goTo = i =>
      setCurrentIndex(i)
  
    // AOS init
    useEffect(() => {
      AOS.init({ once: true })
    }, [])
  
    // autoplay: 3초마다 next()
    useEffect(() => {
      // interval 이 중복 실행되지 않게 cleanup
      clearInterval(intervalRef.current)
      intervalRef.current = setInterval(next, 3000)
      return () => clearInterval(intervalRef.current)
    }, [currentIndex])

  // 카드 위치 클래스 계산
  const positionClass = i => {
    const len = teamMembers.length
    const offset = (i - currentIndex + len) % len
    if (offset === 0) return 'center'
    if (offset === 1) return 'right-1'
    if (offset === 2) return 'right-2'
    if (offset === len - 1) return 'left-1'
    if (offset === len - 2) return 'left-2'
    return 'hidden'
  }

  return (
    <section
      id="our-team"
      className="py-20 bg-white text-center"
      data-aos="fade-up"
    >
      <h1 className="about-title" data-aos="flip-left">
        과목별 SKY 강사진
      </h1>
      <div className="carousel-container">
        <button className="nav-arrow left" onClick={prev}>
          ‹
        </button>
        <div className="carousel-track" data-aos="flip-up">
          {teamMembers.map((m, i) => (
            <div
              key={i}
              className={`card ${positionClass(i)}`}
              onClick={() => goTo(i)}
            >
              <img src={m.img} alt={m.name} />
            </div>
          ))}
        </div>
        <button className="nav-arrow right" onClick={next}>
          ›
        </button>
      </div>

      <div className="member-info" data-aos="flip-left">
        <h2 className="member-name">{teamMembers[currentIndex].name}</h2>
        <p className="member-role">{teamMembers[currentIndex].role}</p>
      </div>

      <div className="dots">
        {teamMembers.map((_, i) => (
          <div
            key={i}
            className={`dot ${i === currentIndex ? 'active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  )
}
