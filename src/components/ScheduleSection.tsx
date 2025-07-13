// components/ScheduleSection.jsx
'use client'
import { useState, useEffect } from 'react'

const scheduleImgs = [
  'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbIELQu%2FbtsCwNwTuZA%2FKRLa9YrNNbjxaHftLStzJ1%2Fimg.png',
  'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbbL1lp%2FbtsCc5KGXYd%2F5sn2EIORQtFsDvem2Ubgq1%2Fimg.png',
  'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FduUNFM%2FbtsObLfOwNp%2FQ5N7GoLgW8OErgYF5KLz3K%2Fimg.png',
  'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FsRRjh%2FbtsB7QtMrEr%2FSkn65W2QrKZSGOXomMelbk%2Fimg.png',
  'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdNCS5e%2FbtsCg0uNTxC%2FIeLiFLx9vo6HAIwGNDkuU0%2Fimg.png',
]

const scheduleRows = [
  ['16:00 ~ 17:00', '1차 명문대 멘토특강'],
  ['17:00 ~ 18:00', '저녁 식사 및 운동'],
  ['18:00 ~ 21:00', '저녁 정규 수업'],
  ['18:00 ~ 22:00', '2차 멘토링 데일리 학습검사'],
  ['22:00 ~ 23:00', '저녁 연장 학습'],
]

export default function ScheduleSection() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const iv = setInterval(() => {
      setIdx(i => (i + 1) % scheduleRows.length)
    }, 3000)
    return () => clearInterval(iv)
  }, [])

  return (
    <section className="schedule-section flex flex-wrap items-center justify-center gap-8 py-16 bg-gradient-to-br from-red-50 to-red-100" data-aos="fade-left">
      <div className="schedule-image flex-shrink-0">
        <img
          id="scheduleImg"
          src={scheduleImgs[idx]}
          alt="일과표 이미지"
          className="rounded-full border-8 border-white shadow-lg w-80 h-80 object-cover"
        />
      </div>
      <div className="schedule-table overflow-hidden rounded-lg shadow-lg">
        <table className="min-w-[320px] bg-white">
          <tbody id="scheduleBody">
            {scheduleRows.map((row, i) => (
              <tr
                key={i}
                className={i === idx ? 'bg-red-100 font-semibold' : ''}
              >
                <td className="px-4 py-2">{row[0]}</td>
                <td className="px-4 py-2">{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
