import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-2">Elite English</h2>
          <p className="text-sm">중학생 영어 과외 전문</p>
        </div>
        <div className="text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Elite English Tutoring. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;