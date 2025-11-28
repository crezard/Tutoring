import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import About from './components/About.tsx';
import AIGrammarCheck from './components/AIGrammarCheck.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import ClassInfo from './components/ClassInfo.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* Class Info Section */}
        <ClassInfo />

        {/* Curriculum Section */}
        <Features />
        
        {/* Swapped Order: AI Test after Curriculum */}
        <AIGrammarCheck />
        
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;