import React, { useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import About from './components/About.tsx';
import AIGrammarCheck from './components/AIGrammarCheck.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import ClassInfo from './components/ClassInfo.tsx';

const App: React.FC = () => {
  // 앱이 로드될 때 주소창에 #id가 있으면 해당 위치로 자동 스크롤
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // '#' 제거
      const id = hash.substring(1);
      // DOM 렌더링 시간을 고려해 약간의 지연 후 스크롤
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* Class Info Section */}
        <ClassInfo />

        {/* Swapped Order: About (Features) comes before AI Test and Curriculum */}
        <About />
        
        <AIGrammarCheck />
        
        {/* Curriculum Section */}
        <Features />
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;