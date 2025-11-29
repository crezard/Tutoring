import React from 'react';

const ClassInfo: React.FC = () => {
  return (
    <section id="class-info" className="py-12 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6">
        {/* Main Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 break-keep">영문법 과외 개요</h2>
          <p className="text-gray-500 mt-4 text-sm md:text-lg break-keep">
            이번 방학, 우리 아이에게 딱 맞는 맞춤형 수업을 확인해보세요.
          </p>
        </div>

        {/* Info Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
          
          {/* Target */}
          <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 hover:border-blue-200 transition-all hover:shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-2xl">
                🎯
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">모집 대상</h4>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  중학교 1학년 ~ 3학년<br/>
                  <span className="text-sm text-gray-400 mt-1 block">문법 기초가 부족하거나<br/>내신 고득점을 목표로 하는 학생</span>
                </p>
              </div>
            </div>
          </div>

          {/* Period */}
          <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 hover:border-blue-200 transition-all hover:shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-2xl">
                📅
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">과외 기간</h4>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  1월 ~ 2월 둘째 주까지<br/>
                  <span className="font-bold text-blue-600 mt-1 block">총 12회 완성 (6주 × 주 2회)</span>
                </p>
              </div>
            </div>
          </div>

          {/* Time */}
          <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 hover:border-blue-200 transition-all hover:shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-2xl">
                ⏰
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">수업 시간</h4>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  오전 10:00 ~ 12:00 (2시간)<br/>
                  <span className="text-sm text-blue-500 mt-1 block">* 기간 및 요일은 학생 일정에 맞춰<br/>유연하게 조율 가능합니다.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 hover:border-blue-200 transition-all hover:shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-2xl">
                📍
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">과외 장소</h4>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  3단지 래미안슈르 아파트<br/>
                  <span className="text-sm text-gray-400 mt-1 block">쾌적하고 조용한 학습 환경 제공</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Action */}
        <div className="text-center bg-gray-50 rounded-2xl p-6 max-w-2xl mx-auto border border-gray-200">
          <p className="text-gray-500 mb-2 font-medium">수업 관련 궁금한 점이 있으신가요?</p>
          <a href="tel:01038835251" className="text-2xl md:text-3xl font-bold text-blue-900 hover:text-blue-700 transition-colors block mb-4">
            010-3883-5251
          </a>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-900 hover:bg-blue-800 text-white px-10 py-3 md:py-4 rounded-xl font-bold transition-all shadow-lg transform hover:-translate-y-1 text-base md:text-lg"
          >
            상담 신청하기
          </button>
        </div>

      </div>
    </section>
  );
};

export default ClassInfo;