import React from 'react';

const About: React.FC = () => {
  const features = [
    {
      id: 1,
      icon: "😆",
      title: "재미있는 선생님",
      description: "아이들 눈높이에 맞게 재미있는 예시와 예문을 활용하여 지루하지 않게 가르칩니다."
    },
    {
      id: 2,
      icon: "💡",
      title: "\"왜?\"가 해결되는 원리 중심",
      description: "단순 암기가 아닌, 문장의 원리와 역할을 이해시켜 응용력을 길러줍니다."
    },
    {
      id: 3,
      icon: "🎓",
      title: "영어교육학 전공",
      description: "영어 교육학을 전공했고 중등교원 자격증을 보유한 검증된 전문가입니다."
    },
    {
      id: 4,
      icon: "⚖️",
      title: "균형 잡힌 실력 향상",
      description: "내신, 문법, 독해, 논술까지 어느 하나 치우치지 않고 균형 있게 실력을 향상시켜줍니다."
    },
    {
      id: 5,
      icon: "🤖",
      title: "연구하는 선생님 (AI 활용)",
      description: "IT 및 게임회사 재직 경험을 살려 AI를 교수도구로 적극 활용하고 최신 교재를 연구합니다."
    },
    {
      id: 6,
      icon: "🎯",
      title: "효율적인 1:1 맞춤 완성",
      description: "짧은 방학 동안 학생 수준에 맞춘 세심한 지도로 기초를 완성합니다. 10년 넘게 3단지에 거주하며 문원초·중 학생들을 꾸준히 지도해왔습니다."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 leading-tight break-keep">
            재미있고 명쾌하고 스마트한 수업
          </h2>
          <p className="text-gray-500 mt-4 text-sm md:text-lg break-keep">
            단순한 지식 전달을 넘어, 아이들의 눈높이에 맞춘 체계적인 교육을 약속합니다.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-3xl mb-6 shadow-inner">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-4 break-keep">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed break-keep">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;