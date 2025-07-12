export default function Programs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto space-y-16">

        {/* 연간 로드맵 */}
        <div>
          <h2 className="text-3xl font-bold text-center text-primary mb-6">정시파이터반 연간 로드맵</h2>
          <ul className="grid md:grid-cols-4 gap-6 text-center text-sm">
            <li className="bg-white p-4 rounded shadow">
              <h4 className="font-semibold text-lg mb-2">1학기 (3~6월)</h4>
              <p>기출 + 개념 훈련<br/>중간·기말 내신 병행</p>
            </li>
            <li className="bg-white p-4 rounded shadow">
              <h4 className="font-semibold text-lg mb-2">여름방학 (7~8월)</h4>
              <p>약점 과목 집중 보완<br/>실전 모의 트레이닝 시작</p>
            </li>
            <li className="bg-white p-4 rounded shadow">
              <h4 className="font-semibold text-lg mb-2">2학기 (9~11월)</h4>
              <p>킬러문항 분석 + 시간 안배 전략<br/>전범위 실전 모의 반복</p>
            </li>
            <li className="bg-white p-4 rounded shadow">
              <h4 className="font-semibold text-lg mb-2">겨울방학 (12~2월)</h4>
              <p>정시 시스템 선행<br/>고3 대비 과목별 완성</p>
            </li>
          </ul>
        </div>

        {/* 월간 커리큘럼 (예시) */}
        <div>
          <h3 className="text-2xl text-center font-bold mb-4">월간 커리큘럼 예시 (8월)</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow overflow-hidden text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="p-3">주차</th>
                  <th className="p-3">학습 내용</th>
                  <th className="p-3">비고</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">1주차</td>
                  <td className="p-3">수학 킬러 유형 집중 / 국어 독서 연습 / 영어 EBS 연계 분석</td>
                  <td className="p-3">기출 응용 중심</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">2주차</td>
                  <td className="p-3">실전 모의고사 1회 / 오답 피드백 / 과목별 멘토링</td>
                  <td className="p-3">실전 적응 훈련</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">3주차</td>
                  <td className="p-3">전범위 과목별 복습 / 엔그램 정리</td>
                  <td className="p-3">약점 교정</td>
                </tr>
                <tr>
                  <td className="p-3">4주차</td>
                  <td className="p-3">2회차 실전 모의 / 시간 분배 전략 실습</td>
                  <td className="p-3">결과 분석 리포트 제공</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 하루 루틴 (기존 유지) */}
        <div></div>
        <h3 className="text-2xl font-bold text-center text-primary mb-6">하루 학습 루틴</h3>
<div className="overflow-x-auto">
  <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
    <thead className="bg-primary text-white">
      <tr>
        <th className="p-4">시간</th>
        <th className="p-4">프로그램</th>
        <th className="p-4">내용</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b hover:bg-gray-50">
        <td className="p-4">08:00–15:30</td>
        <td className="p-4">학교 수업 및 자율학습</td>
        <td className="p-4">학교 수업 수강 / 과제 수행 및 정시형 노트 정리</td>
      </tr>
      <tr className="border-b hover:bg-gray-50">
        <td className="p-4">16:00–17:00</td>
        <td className="p-4">1차 명문대 멘토 특강</td>
        <td className="p-4">멘토가 직접 전하는 실전 학습법 및 공부 전략 공유</td>
      </tr>
      <tr className="border-b hover:bg-gray-50">
        <td className="p-4">17:00–18:00</td>
        <td className="p-4">저녁 식사 및 운동</td>
        <td className="p-4">가벼운 산책 또는 스트레칭 포함</td>
      </tr>
      <tr className="border-b hover:bg-gray-50">
        <td className="p-4">18:00–21:00</td>
        <td className="p-4">저녁 정규 수업</td>
        <td className="p-4">수능 기출·변형 중심 개념+실전 수업</td>
      </tr>
      <tr className="border-b hover:bg-gray-50">
        <td className="p-4">21:00–22:00</td>
        <td className="p-4">2차 멘토링 및 데일리 학습 검사</td>
        <td className="p-4">개인별 학습 내용 점검 및 당일 루틴 피드백</td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="p-4">22:00–23:00</td>
        <td className="p-4">저녁 연장 학습</td>
        <td className="p-4">자율학습 또는 오답 정리 / 자기주도 정리 노트 작성</td>
      </tr>
    </tbody>
  </table>
</div>

      </div>
    </section>
  );
}
