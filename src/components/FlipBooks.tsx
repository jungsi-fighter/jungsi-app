// components/FlipBooks.jsx
import { useEffect } from 'react'
import AOS from 'aos'

export default function FlipBooks() {
  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  return (
    <section className="book-section bg-white" >
      <div className="component" data-aos="fade-up">
        <ul className="align">
          {/* Book 1 */}
          <li>
            <figure className="book" data-aos="flip-left">
              {/* Front cover */}
              <ul className="hardcover_front">
                <li>
                  <img
                    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FY2sGm%2FbtsOa1cKwCp%2FoowfQZaC9bssBfh98mAFSK%2Fimg.jpg"
                    alt="전일 학습플래너 표지"
                    width="100%"
                    height="100%"
                  />
                  <span className="ribbon bestseller">필수</span>
                </li>
                <li></li>
              </ul>
              {/* Pages */}
              <ul className="page">
                {[
                  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbxFf5C%2FbtsObueb988%2F5afOkXtCk6l491clQmXyIk%2Fimg.png",
                ].map((url, idx) => (
                  <li
                    key={idx}
                    style={{
                      backgroundImage: `url('${url}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  ></li>
                ))}
                <li
                  style={{
                    backgroundImage: `url('https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbxFf5C%2FbtsObueb988%2F5afOkXtCk6l491clQmXyIk%2Fimg.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <a className="btn" href="#" />
                </li>
                {[...new Array(4)].map((_, idx) => (
                  <li
                    key={`f1-${idx}`}
                    style={{
                      backgroundImage: `url('https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbxFf5C%2FbtsObueb988%2F5afOkXtCk6l491clQmXyIk%2Fimg.png')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  ></li>
                ))}
              </ul>
              {/* Back cover */}
              <ul className="hardcover_back">
                <li></li>
                <li></li>
              </ul>
              {/* Spine */}
              <ul className="book_spine">
                <li></li>
                <li></li>
              </ul>
              <figcaption data-aos="flip-up">
                <h1>전일 학습플래너</h1>
                <span>By 토마토 전일학원</span>
                <p>
                  저희 학원은 학생 개개인의 자기주도 학습력 향상을 위해
                  디지털 학습플래너 시스템을 운영 중입니다.
                  <br />
                  학생들은 매일 자신의 공부 계획과 실천 내용을 온라인으로 기록하고,
                  이를 바탕으로 전담 매니저가 학습 피드백 및 주간 리포트를 제공합니다.
                  <br />
                  전일학원은 단순한 출석 관리가 아닌, 실질적인 학습 성과 관리에 집중합니다.
                </p>
              </figcaption>
            </figure>
          </li>

          {/* Book 2 */}
          <li>
            <figure className="book" data-aos="flip-right">
              <ul className="hardcover_front">
                <li>
                  <img
                    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FFlani%2FbtsObK18rn0%2FcauiAK3AeOsEbJx5cZ9GvK%2Fimg.png"
                    alt="영단어 어휘집 표지"
                    width="100%"
                    height="100%"
                  />
                  <span className="ribbon new">영단어</span>
                </li>
                <li></li>
              </ul>
              <ul className="page">
                {[...new Array(6)].map((_, idx) => (
                  <li
                    key={idx}
                    style={{
                      backgroundImage: `url('https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fx2mlw%2FbtsOcgzvB8O%2FyGxvEDxV6n7DEEyi5jwmAk%2Fimg.png')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    {idx === 1 && <a className="btn" href="#" />}
                  </li>
                ))}
              </ul>
              <ul className="hardcover_back">
                <li></li>
                <li></li>
              </ul>
              <ul className="book_spine">
                <li></li>
                <li></li>
              </ul>
              <figcaption data-aos="flip-up">
                <h1>영단어 어휘집</h1>
                <span>By 토마토전일학원(심우철T)</span>
                <p>
                  방학 기간 동안 어휘력 강화 집중 프로그램을 운영합니다.
                  <br />
                  매일 30~50단어 학습 + 온라인 테스트,
                  누적 점수 관리 및 오답 복습 시스템 적용,
                  주간 단어테스트 결과 리포트 제공 등
                  체계적인 어휘 학습을 지원합니다.
                </p>
              </figcaption>
            </figure>
          </li>

          {/* Book 3 */}
          <li>
            <figure className="book" data-aos="flip-up">
              <ul className="hardcover_front">
                <li>
                  <img
                    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FPsHGa%2FbtsOb7iwU5m%2FhnCFYuaWqa5wfbbaFkbJ00%2Fimg.png"
                    alt="엔그램 학습플래너 표지"
                    width="100%"
                    height="100%"
                  />
                </li>
                <li></li>
              </ul>
              <ul className="page">
                {[...new Array(6)].map((_, idx) => (
                  <li
                    key={idx}
                    style={{
                      backgroundImage: `url('https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fqd5zg%2FbtsOcmzHZRc%2FY0lEjopjTmda4N8hS4I0u0%2Fimg.png')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    {idx === 1 && <a className="btn" href="#" />}
                  </li>
                ))}
              </ul>
              <ul className="hardcover_back">
                <li></li>
                <li></li>
              </ul>
              <ul className="book_spine">
                <li></li>
                <li></li>
              </ul>
              <figcaption data-aos="flip-up">
                <h1>엔그램 학습플래너</h1>
                <span>By 토마토전일학원</span>
                <p>
                  과목별 복습관리 시스템을 통해
                  복습해야 할 내용을 스스로 기록하고
                  반복 학습을 유도합니다.
                  <br />
                  주간 리포트를 통해 복습 실천을 점검하여
                  학습 효과를 극대화합니다.
                </p>
              </figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </section>
  )
}
