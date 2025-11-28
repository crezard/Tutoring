import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className={`text-2xl font-bold cursor-pointer ${isScrolled ? 'text-blue-900' : 'text-white'}`} onClick={() => scrollToSection('hero')}>
          Elite<span className="text-blue-500">English</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <button onClick={() => scrollToSection('class-info')} className={`font-medium hover:text-blue-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white/90'}`}>과외개요</button>
          <button onClick={() => scrollToSection('curriculum')} className={`font-medium hover:text-blue-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white/90'}`}>커리큘럼</button>
          <button onClick={() => scrollToSection('ai-test')} className={`font-medium hover:text-blue-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white/90'}`}>AI 실력 테스트</button>
          <button onClick={() => scrollToSection('about')} className={`font-medium hover:text-blue-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white/90'}`}>특징</button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            상담문의
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className={`w-8 h-8 ${isScrolled ? 'text-gray-800' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col space-y-4">
           <button onClick={() => scrollToSection('class-info')} className="text-gray-800 font-medium text-left py-2 border-b border-gray-100">과외개요</button>
           <button onClick={() => scrollToSection('curriculum')} className="text-gray-800 font-medium text-left py-2 border-b border-gray-100">커리큘럼</button>
           <button onClick={() => scrollToSection('ai-test')} className="text-gray-800 font-medium text-left py-2 border-b border-gray-100">AI 실력 테스트</button>
           <button onClick={() => scrollToSection('about')} className="text-gray-800 font-medium text-left py-2 border-b border-gray-100">특징</button>
           <button onClick={() => scrollToSection('contact')} className="text-gray-800 font-medium text-left py-2 border-b border-gray-100">상담문의</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;