import React from 'react';

const ClassInfo: React.FC = () => {
  return (
    <section id="class-info" className="py-16 md:py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6">
        {/* Main Title - Centered matching Features section style */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 break-keep">영문법 과외 개요</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Left Side: Image */}
          <div className="md:w-1/2 relative w-full">
             {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blue-100 rounded-2xl z-0 hidden md:block"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-50 rounded-full z-0 hidden md:block"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Study Environment" 
              className="relative z-10 w-full h-64 md:h-[500px] object-cover rounded-2xl shadow-xl transition-transform duration-500 hover:scale-[1.01]"
            />
            
            {/* Overlay Badge */}
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-20 bg-white/90 backdrop-blur-sm p-3 md:p-4 rounded-xl shadow-lg border border-white/50">
              <p className="text-blue-900 font-bold text-base md:text-lg">겨울방학 특강</p>
              <p className="text-red-500 font-bold text-xs md:text-sm">선착순 마감 임박</p>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="md:w-1/2 w-full">
            
            <div className="space-y-6 md:space-y-8">
              {/* Target */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-xl md:text-2xl">
                  🎯
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-bold text-gray-900 mb-1">모집 대상</h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    중학교 1학년 ~ 3학년<br/>
                    <span className="text-xs md:text-sm text-gray-400">문법 기초가 부족하거나 내신 고득점을 목표로 하는 학생</span>
                  </p>
                </div>
              </div>

              {/* Period */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-xl md:text-2xl">
                  📅
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-bold text-gray-900 mb-1">과외 기간</h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    1월 ~ 2월 둘째 주까지<br/>
                    <span className="font-semibold text-blue-600">총 12회 완성</span> (6주 × 주 2회)
                  </p>
                </div>
              </div>

              {/* Time */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-xl md:text-2xl">
                  ⏰
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-bold text-gray-900 mb-1">수업 시간</h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    오전 10:00 ~ 12:00 (2시간)<br/>
                    <span className="text-xs md:text-sm text-blue-500">* 기간 및 요일은 학생 일정에 맞춰 조율 가능합니다.</span>
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-xl md:text-2xl">
                  📍
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-bold text-gray-900 mb-1">과외 장소</h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    3단지 래미안슈르 아파트<br/>
                    <span className="text-xs md:text-sm text-gray-400">쾌적하고 조용한 학습 환경 제공</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
              <div>
                 <p className="text-sm text-gray-500 mb-1">수업 문의</p>
                 <a href="tel:01038835251" className="text-2xl font-bold text-blue-900 hover:text-blue-700 transition-colors">010-3883-5251</a>
              </div>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full md:w-auto bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg transform hover:-translate-y-1"
              >
                상담 신청하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassInfo;