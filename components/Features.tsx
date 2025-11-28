import React, { useState } from 'react';

interface CurriculumItem {
  session: number;
  topic: string;
  details: string;
}

const curriculumData: Record<string, CurriculumItem[]> = {
  '중1': [
    { session: 1, topic: '품사와 문장의 기초', details: '8품사, 문장의 4요소, Be동사와 일반동사의 활용' },
    { session: 2, topic: '시제 (Basic)', details: '현재, 과거, 미래, 진행형의 개념과 형태' },
    { session: 3, topic: '조동사', details: 'can, will, may, must, should의 의미와 쓰임' },
    { session: 4, topic: '명사와 관사', details: '셀 수 있는/없는 명사, a/an/the의 쓰임' },
    { session: 5, topic: '대명사', details: '인칭대명사, 지시대명사, 재귀대명사, 부정대명사' },
    { session: 6, topic: '문장의 형식', details: '1형식부터 5형식까지 문장 구조 완벽 분석' },
    { session: 7, topic: 'TO 부정사 (1)', details: '명사적 용법 (주어, 목적어, 보어)' },
    { session: 8, topic: '동명사', details: '동명사의 역할, 동명사 vs To부정사 목적어' },
    { session: 9, topic: '형용사와 부사/비교', details: '형용사/부사의 역할, 원급/비교급/최상급' },
    { session: 10, topic: '접속사', details: '등위접속사(and, but 등), 종속접속사(that, when 등)' },
    { session: 11, topic: '전치사/의문사', details: '시간/장소 전치사, 의문문 만들기' },
    { session: 12, topic: '총정리 및 실전테스트', details: '중1 전 과정 요약 및 학교 기출 모의고사' },
  ],
  '중2': [
    { session: 1, topic: '문장의 형식 심화', details: '4형식과 5형식의 전환, 사역동사와 지각동사' },
    { session: 2, topic: '시제 (Intermediate)', details: '현재완료(완료, 경험, 계속, 결과) vs 과거시제' },
    { session: 3, topic: '수동태 (1)', details: '수동태의 형태와 시제, By 이외의 전치사' },
    { session: 4, topic: '수동태 (2)', details: '4형식/5형식의 수동태, 주의해야 할 수동태' },
    { session: 5, topic: 'TO 부정사 (2)', details: '형용사적/부사적 용법, 가주어/진주어, 의미상 주어' },
    { session: 6, topic: '동명사 심화', details: '동명사의 관용적 표현, 동명사 vs 현재분사 구별' },
    { session: 7, topic: '분사', details: '현재분사와 과거분사의 한정적/서술적 용법' },
    { session: 8, topic: '관계대명사 (1)', details: '주격, 목적격, 소유격 관계대명사의 역할과 생략' },
    { session: 9, topic: '관계대명사 (2)', details: '관계대명사 that vs what, 관계대명사의 계속적 용법' },
    { session: 10, topic: '접속사 심화', details: '상관접속사, 간접의문문, 조건을 나타내는 접속사' },
    { session: 11, topic: '가정법 기초', details: '가정법 과거, 가정법 과거완료의 기본 공식' },
    { session: 12, topic: '기출 분석 및 오답노트', details: '중2 내신 빈출 유형 분석 및 약점 보완' },
  ],
  '중3': [
    { session: 1, topic: '시제와 수동태 완성', details: '완료 진행형, 미래 완료, 조동사가 있는 수동태' },
    { session: 2, topic: '가정법 심화', details: 'I wish, as if, 혼합가정법, 가정법의 도치' },
    { session: 3, topic: '분사구문', details: '분사구문의 생성 원리, 완료형 분사구문, 독립분사구문' },
    { session: 4, topic: '관계사 완성', details: '관계부사, 복합관계사, 관계사의 생략 및 예외' },
    { session: 5, topic: '특수구문 (1)', details: '도치(부정어, 장소부사구), 강조(It is ~ that, 동사 강조)' },
    { session: 6, topic: '특수구문 (2)', details: '생략, 동격, 병렬 구조, 부정 표현' },
    { session: 7, topic: '일치와 화법', details: '수 일치, 시제 일치, 직접화법과 간접화법 전환' },
    { session: 8, topic: '고등 어법 (1)', details: '수능 빈출: 주어 찾기, 동사 vs 준동사 구별' },
    { session: 9, topic: '고등 어법 (2)', details: '수능 빈출: 관계사 vs 접속사, 대동사, 형용사 vs 부사' },
    { session: 10, topic: '서술형 영작 훈련', details: '고등 내신 대비 핵심 구문 영작 연습' },
    { session: 11, topic: '실전 모의고사 (1)', details: '고1 3월 모의고사 수준 어법/독해 실전 풀이' },
    { session: 12, topic: '파이널 체크', details: '고등학교 입학 전 문법 총정리 및 학습 로드맵 설정' },
  ]
};

const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState('중1');

  return (
    <section id="curriculum" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 break-keep">12회 완성 문법 커리큘럼</h2>
          <p className="text-gray-500 mt-4 text-sm md:text-lg break-keep">
            <span className="font-semibold text-blue-600">기출로 적중! 해커스 중학영문법</span> 교재를 기반으로<br/>
            학년별 필수 문법을 12번의 수업으로 완벽하게 정리합니다.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="flex bg-gray-100 p-1 rounded-xl w-full md:w-auto overflow-x-auto">
            {['중1', '중2', '중3'].map((grade) => (
              <button
                key={grade}
                onClick={() => setActiveTab(grade)}
                className={`flex-1 md:flex-none px-6 md:px-8 py-2 md:py-3 rounded-lg font-bold text-base md:text-lg transition-all duration-300 whitespace-nowrap ${
                  activeTab === grade
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {grade} 과정
              </button>
            ))}
          </div>
        </div>

        {/* Curriculum Table */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 animate-fade-in-up">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-4 md:px-8 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center text-white text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-2 md:mb-0">
                <h3 className="text-xl md:text-2xl font-bold">{activeTab} 문법</h3>
                <p className="text-blue-100 text-sm md:text-base font-medium">총 12회 / 회당 120분 수업</p>
              </div>
              <div className="hidden md:block text-4xl opacity-30">
                {activeTab === '중1' ? '🌱' : activeTab === '중2' ? '🌿' : '🌳'}
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-3 md:px-6 py-3 md:py-4 font-bold text-gray-600 w-16 md:w-48 text-center text-sm md:text-base">회차</th>
                    <th className="px-3 md:px-6 py-3 md:py-4 font-bold text-gray-600 w-1/3 text-sm md:text-base">학습 주제</th>
                    <th className="px-3 md:px-6 py-3 md:py-4 font-bold text-gray-600 text-sm md:text-base">상세 내용</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {curriculumData[activeTab].map((item) => (
                    <tr key={item.session} className="hover:bg-blue-50 transition-colors">
                      <td className="px-3 md:px-6 py-3 md:py-4 text-center">
                        <span className="inline-block w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-100 text-blue-800 font-bold leading-6 md:leading-8 text-xs md:text-sm">
                          {item.session}
                        </span>
                      </td>
                      <td className="px-3 md:px-6 py-3 md:py-4 font-bold text-gray-800 text-sm md:text-base">
                        {item.topic}
                      </td>
                      <td className="px-3 md:px-6 py-3 md:py-4 text-gray-600 text-sm md:text-lg">
                        {item.details}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-4 text-right px-2">
            <p className="text-gray-400 text-xs md:text-sm">
              ※ 위 커리큘럼은 학생의 레벨 진단 결과와 학습 속도에 따라 맞춤형으로 일부 조정될 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;