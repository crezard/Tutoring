import React, { useState } from 'react';
import { generateQuiz } from '../services/geminiService';
import { submitTestResult } from '../services/sheetService';
import { QuizQuestion } from '../types';

const AIGrammarCheck: React.FC = () => {
  const [grade, setGrade] = useState<string | null>(null);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'test' | 'result'>('idle');
  const [error, setError] = useState<string | null>(null);
  
  // Form State for Submission
  const [studentName, setStudentName] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // 실시간 유효성 검사
  const isFormValid = studentName.trim().length > 0 && studentPhone.trim().length > 0 && agreedToPrivacy;

  const handleStartTest = async (selectedGrade: string) => {
    setGrade(selectedGrade);
    setStatus('loading');
    setError(null);
    setIsSubmitted(false);
    setStudentName('');
    setStudentPhone('');
    setAgreedToPrivacy(false);
    try {
      const quizData = await generateQuiz(selectedGrade);
      setQuestions(quizData);
      setStatus('test');
      setCurrentIdx(0);
      setScore(0);
    } catch (err) {
      setError("문제를 불러오는 중 오류가 발생했습니다. 다시 시도해주세요.");
      setStatus('idle');
    }
  };

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    
    if (index === questions[currentIdx].answerIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setStatus('result');
    }
  };

  const getLevelFeedback = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return { level: '최상위권 (Advanced)', msg: '상위권 실력입니다! 고난도 문법 심화 과정으로 만점에 도전하세요.' };
    if (percentage >= 70) return { level: '중위권 (Intermediate)', msg: '기초가 잡혀있습니다. 취약한 유형을 집중 공략하면 성적이 급상승할 거예요.' };
    return { level: '기초 완성 필요 (Basic)', msg: '문법 기초 정리가 시급합니다. 이번 겨울방학이 골든타임입니다!' };
  };

  const handleSubmitResult = async () => {
    setValidationError(null);

    // Manual Validation Logic (Redundant due to button disabled state, but safe to keep)
    if (!studentName.trim()) {
      window.alert('학생 이름을 입력해주세요.');
      setValidationError('학생 이름을 입력해주세요.');
      return;
    }
    if (!studentPhone.trim()) {
       window.alert('연락처를 입력해주세요.');
       setValidationError('연락처를 입력해주세요.');
       return;
    }
    if (!agreedToPrivacy) {
       window.alert('개인정보 수집 및 이용 동의에 체크해주세요.');
       setValidationError('개인정보 수집 및 이용 동의에 체크해주세요.');
       return;
    }
    
    setIsSubmitting(true);
    
    const feedback = getLevelFeedback();
    const resultData = {
      name: studentName,
      phone: studentPhone,
      grade: grade || 'Unspecified',
      score: score,
      total: questions.length,
      level: feedback.level,
      timestamp: new Date().toISOString()
    };

    const success = await submitTestResult(resultData);
    
    setIsSubmitting(false);
    if (success) {
      setIsSubmitted(true);
    } else {
      window.alert('전송에 실패했습니다. 잠시 후 다시 시도해주세요.');
    }
  };

  const handleReset = () => {
    if (isSubmitted) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setStatus('idle');
    setScore(0);
    setQuestions([]);
    setIsSubmitted(false);
    setStudentName('');
    setStudentPhone('');
    setAgreedToPrivacy(false);
  };

  return (
    <section id="ai-test" className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden min-h-[800px] flex items-center">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 font-semibold text-xs md:text-sm mb-4 border border-blue-500/30">
              Google Gemini AI 기반
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">AI 실력 테스트</h2>
            <p className="text-sm md:text-xl text-gray-300 break-keep">
              Gemini AI가 출제하는 20개의 문제로{' '}<br className="hidden md:block" /> 
              현재 아이의 영어 실력을 진단해보세요.
            </p>
          </div>

          {/* ERROR STATE */}
          {error && (
             <div className="bg-red-500/20 border border-red-500/50 text-red-200 p-4 rounded-xl text-center mb-8">
               {error}
             </div>
          )}

          {/* STEP 1: GRADE SELECTION */}
          {status === 'idle' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {['중1', '중2', '중3'].map((g) => (
                <button
                  key={g}
                  onClick={() => handleStartTest(g)}
                  className="group relative bg-white/5 backdrop-blur-sm border-2 border-white/10 hover:border-blue-400 rounded-2xl p-6 md:p-8 transition-all hover:-translate-y-2"
                >
                  <div className="text-3xl md:text-4xl mb-4 group-hover:scale-110 transition-transform">📚</div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{g} 레벨 테스트</h3>
                  <p className="text-gray-400 text-xs md:text-sm">현행 {g} 교과 과정 기준<br/>문법/어휘 20문항</p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </button>
              ))}
            </div>
          )}

          {/* STEP 2: LOADING */}
          {status === 'loading' && (
            <div className="text-center py-12">
              <div className="w-16 h-16 md:w-20 md:h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-8"></div>
              <h3 className="text-xl md:text-2xl font-bold animate-pulse">AI가 맞춤형 문제를 출제하고 있습니다</h3>
              <p className="text-gray-400 mt-4 text-sm md:text-base">잠시만 기다려주세요...</p>
            </div>
          )}

          {/* STEP 3: QUIZ INTERFACE */}
          {status === 'test' && questions.length > 0 && (
            <div className="bg-white rounded-3xl p-5 md:p-10 shadow-2xl text-gray-800">
              {/* Progress Bar */}
              <div className="flex items-center justify-between mb-4 md:mb-6 text-xs md:text-sm font-medium text-gray-500">
                <span>진행 상황 {currentIdx + 1} / {questions.length}</span>
                <span>{Math.round(((currentIdx + 1) / questions.length) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full mb-6 md:mb-8">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
                ></div>
              </div>

              {/* Question */}
              <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 leading-relaxed">
                <span className="text-blue-600 mr-2">Q{questions[currentIdx].id}.</span>
                {questions[currentIdx].question}
              </h3>

              {/* Options */}
              <div className="space-y-3 mb-6 md:mb-8">
                {questions[currentIdx].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(idx)}
                    disabled={isAnswered}
                    className={`w-full p-3 md:p-4 rounded-xl text-left border-2 transition-all flex items-center justify-between text-sm md:text-base
                      ${!isAnswered 
                        ? 'border-gray-100 hover:border-blue-400 hover:bg-blue-50' 
                        : selectedOption === idx
                          ? idx === questions[currentIdx].answerIndex 
                            ? 'border-green-500 bg-green-50 text-green-800' // Correct
                            : 'border-red-500 bg-red-50 text-red-800' // Wrong
                          : idx === questions[currentIdx].answerIndex
                            ? 'border-green-500 bg-green-50 text-green-800' // Show Correct if wrong picked
                            : 'border-gray-100 opacity-50'
                      }`}
                  >
                    <span className="font-medium">{option}</span>
                    {isAnswered && idx === questions[currentIdx].answerIndex && (
                       <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    )}
                    {isAnswered && selectedOption === idx && idx !== questions[currentIdx].answerIndex && (
                       <svg className="w-5 h-5 md:w-6 md:h-6 text-red-600 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    )}
                  </button>
                ))}
              </div>

              {/* Feedback & Next Button */}
              {isAnswered && (
                <div className="animate-fade-in-up">
                  <div className="bg-blue-50 p-4 rounded-xl mb-6 border border-blue-100">
                    <span className="font-bold text-blue-800 block mb-1 text-sm md:text-base">해설</span>
                    <p className="text-blue-900 text-sm">{questions[currentIdx].explanation}</p>
                  </div>
                  <button
                    onClick={handleNext}
                    className="w-full bg-blue-900 text-white font-bold py-3 md:py-4 rounded-xl hover:bg-blue-800 transition-all shadow-lg flex items-center justify-center gap-2 text-sm md:text-base"
                  >
                    {currentIdx < questions.length - 1 ? '다음 문제' : '결과 보기'}
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* STEP 4: RESULT */}
          {status === 'result' && (
            <div className="bg-white rounded-3xl p-6 md:p-12 shadow-2xl text-center text-gray-800 animate-scale-in">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-white text-2xl md:text-3xl font-bold">
                {score} <span className="text-sm md:text-lg font-normal opacity-70">/20</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                레벨: <span className="text-blue-600">{getLevelFeedback().level}</span>
              </h2>
              <p className="text-sm md:text-base text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
                {getLevelFeedback().msg}
              </p>

              {/* Submission Form */}
              {!isSubmitted ? (
                <div className="max-w-md mx-auto bg-gray-50 rounded-2xl p-4 md:p-6 border border-gray-100 mb-8">
                  <h4 className="font-bold text-gray-900 mb-4">📝 선생님에게 결과 전송하기</h4>
                  {validationError && (
                    <div className="mb-4 p-3 bg-red-50 text-red-600 text-xs md:text-sm rounded-lg border border-red-100">
                      ⚠️ {validationError}
                    </div>
                  )}
                  <form noValidate className="space-y-3">
                    <input 
                      type="text" 
                      placeholder="학생 이름" 
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm md:text-base"
                    />
                    <input 
                      type="tel" 
                      placeholder="연락처 (010-0000-0000)" 
                      value={studentPhone}
                      onChange={(e) => setStudentPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm md:text-base"
                    />

                    {/* Privacy Checkbox */}
                    <div className={`flex items-start gap-2 text-left p-3 rounded-xl border transition-colors ${!agreedToPrivacy ? 'bg-red-50 border-red-100' : 'bg-blue-50/50 border-blue-100'}`}>
                      <input
                        id="test-privacy"
                        type="checkbox"
                        checked={agreedToPrivacy}
                        onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 shrink-0 cursor-pointer"
                      />
                      <label htmlFor="test-privacy" className="text-sm text-gray-600 cursor-pointer select-none">
                        <span className="font-bold text-gray-800">개인정보 수집 동의</span><br/>
                        <span className="text-xs">입력하신 내용은 상담 용도로만 이용되며, 상담 종료 후 파기됩니다.</span>
                      </label>
                    </div>

                    <button 
                      type="button"
                      onClick={handleSubmitResult}
                      disabled={!isFormValid || isSubmitting}
                      className={`w-full font-bold py-3 rounded-xl transition-all shadow-md text-sm md:text-base
                        ${!isFormValid || isSubmitting
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                        }`}
                    >
                      {isSubmitting ? '전송 중...' : '결과 저장 및 상담 요청'}
                    </button>
                    {!isFormValid && (
                      <p className="text-center text-xs text-red-400 mt-2">
                        * 필수 항목을 모두 입력하고 동의하셔야 전송이 가능합니다.
                      </p>
                    )}
                  </form>                   
                </div>
              ) : (
                <div className="mb-8 p-6 bg-green-50 rounded-2xl border border-green-100 animate-fade-in-up">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h4 className="font-bold text-green-800 text-lg">전송 완료!</h4>
                  <p className="text-green-700">성적이 선생님께 전달되었습니다.<br/>확인 후 빨리 연락드리겠습니다.</p>
                </div>
              )}

              <div className="flex justify-center">
                <button
                  onClick={handleReset}
                  className={`px-8 py-3 font-bold rounded-xl transition-colors text-sm md:text-base ${
                    isSubmitted 
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {isSubmitted ? '확인' : '다시 테스트하기'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIGrammarCheck;