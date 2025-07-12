export default function AcademicWorries() {
    return (
      <section
        id="academic-worries"
        className="relative overflow-hidden py-20 bg-gradient-to-r from-red-500 to-blue-500 text-white"
      >
        {/* 데코 레이어 */}
        <div
          className="absolute -top-1/4 -left-1/4 w-[60%] h-[60%] bg-white/5 rotate-45 rounded-[30%]"
        />
  
        <div className="relative z-10 max-w-3xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold mb-12" data-aos="flip-right">
            <small className="block text-base opacity-80 mb-2">
              입시 전문가에게 나눠 보는
            </small>
            우리 아이의 <span className="text-pink-200">입시 고민은?</span>
          </h2>
  
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <div
              className="relative max-w-xs p-7 bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl shadow-lg"
              data-aos="flip-right"
            >
              <p className="text-lg leading-relaxed">
                <strong>내신을 망친 우리 아이,</strong><br />
                수시로 갈 수 있는 대학은 현재 어떻게 될까?
              </p>
              <div
                className="absolute -bottom-3 left-10 w-0 h-0 border-[15px] border-white/20 border-t-transparent border-r-transparent border-l-transparent"
              />
            </div>
  
            <div
              className="relative max-w-xs p-7 bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl shadow-lg"
              data-aos="flip-left"
            >
              <p className="text-lg leading-relaxed">
                <strong>지금이라도 정시로 전환?</strong><br />
                어떻게 준비해야 성공적으로 입시를 마칠 수 있을까?
              </p>
              <div
                className="absolute -bottom-3 left-10 w-0 h-0 border-[15px] border-white/20 border-t-transparent border-r-transparent border-l-transparent"
              />
            </div>
          </div>
  
          <div data-aos="flip-up">
            <a
              href="https://www.tomatoschool.com/board/urgency/urgency.html"
              className="inline-flex items-center px-8 py-4 border-2 border-white rounded-full text-base opacity-80 mb-2 font-semibold text-white
                         hover:bg-white hover:text-red-500 transition"
            >
              고민을 말해 보세요! <span className="ml-2 text-2xl">↑</span>
            </a>
          </div>
        </div>
      </section>
    )
  }