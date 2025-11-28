import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        
        {/* Header - Centered matching other sections */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 leading-tight break-keep">
            영어교육학 전공 전문가의<br className="hidden md:block" /> 명쾌하고 스마트한 수업
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-16">
          {/* Image Column - Uses absolute positioning on desktop to match text height */}
          <div className="md:w-1/2 relative w-full h-64 md:h-auto">
             {/* Decorative Background for Image */}
            <div className="absolute top-4 left-4 w-full h-full border-2 border-blue-200 rounded-2xl z-0 hidden md:block"></div>
            <img 
              src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="AI Smart Education" 
              className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl grayscale hover:grayscale-0 transition-all duration-500 z-10"
            />
          </div>
          
          <div className="md:w-1/2 w-full flex flex-col justify-center">
            
            <div className="space-y-4 md:space-y-6 text-gray-600 leading-relaxed mb-6 md:mb-8 text-base md:text-lg">
              <p>
                안녕하세요, 학부모님! <br/><br/>
                저는 <strong>영어교육학을 전공하고 중등교원 자격증을 보유</strong>하고 있습니다. 중고등 학원강사 경험을 가지고 있으며 
                대기업 해외주재원, IT/게임 회사에서의 실무 경험을 바탕으로, 단순한 지식 전달을 넘어 아이들의 눈높이에 맞춘 스마트한 교육을 지향합니다.
              </p>
              <p>
                과천 3단지에 10년째 거주하며 문원초·중 학생들을 꾸준히 지도해왔습니다. 
                IT 경험을 살려 직접 제작한 <strong>AI 학습 도구와 온라인 콘텐츠</strong>를 활용해, 
                지루한 문법을 흥미롭고 체계적으로 가르칩니다.
              </p>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold shrink-0 text-sm md:text-base">1</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm md:text-base">"왜?"가 해결되는 원리 중심 수업</h4>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">단순 암기가 아닌, 문장의 원리와 역할을 이해시켜 응용력을 길러줍니다.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold shrink-0 text-sm md:text-base">2</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm md:text-base">IT & AI를 활용한 스마트한 학습</h4>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">아이들에게 친숙한 트렌디한 예문과 온라인 퀴즈로 재미있게 복습합니다.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold shrink-0 text-sm md:text-base">3</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm md:text-base">효율적인 1:1 맞춤 완성</h4>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">짧은 방학 동안 학생 수준에 맞춘 세심한 지도와 피드백으로 기초를 완성합니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;