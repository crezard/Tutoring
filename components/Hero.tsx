import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 md:py-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Study Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center md:text-left">
        <div className="max-w-5xl mx-auto md:mx-0">
          <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight break-keep">
            겨울방학 <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              중학생 영문법 과외
            </span>
            <span className="block md:inline mt-2 md:mt-0 md:ml-4 text-xl md:text-3xl lg:text-5xl font-semibold text-white/90 whitespace-nowrap align-middle">
              (총 12회 완성)
            </span>
          </h1>

          <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-10 leading-relaxed max-w-2xl md:max-w-none mx-auto md:mx-0 break-keep md:whitespace-nowrap">
            겨울방학, 12회 완성 프로그램으로 우리 아이 영문법 기초를 확실하게 다져드립니다.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <button 
              onClick={() => document.getElementById('ai-test')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-900 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-gray-100 transition-all shadow-lg flex items-center justify-center gap-2 transform active:scale-95"
            >
              <span>AI 실력 테스트</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </button>
            <button 
              onClick={() => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-white/10 transition-all transform active:scale-95"
            >
              12회 커리큘럼 보기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;