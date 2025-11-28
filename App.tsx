import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import AIGrammarCheck from './components/AIGrammarCheck';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ClassInfo from './components/ClassInfo';

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