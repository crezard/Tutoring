import React, { useState } from 'react';
import { submitConsultation } from '../services/sheetService';

const goalLabels: Record<string, string> = {
  'grammar': '문법 기초 부족',
  'writing': '서술형/영작',
  'grades': '내신 성적 향상',
  'highschool': '고등 선행 학습'
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    grade: '',
    goal: 'grammar',
    message: ''
  });
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // 실시간 유효성 검사 (버튼 활성화용)
  const isFormValid = 
    formData.name.trim().length > 0 &&
    formData.grade !== '' &&
    formData.phone.trim().length > 0 &&
    agreedToPrivacy;

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setValidationError(null);
    
    // 이중 안전장치 (버튼이 활성화되어 눌렸을 때만 실행됨)
    if (!isFormValid) {
      window.alert("모든 필수 항목을 입력하고 개인정보 동의에 체크해주세요.");
      setValidationError("모든 필수 항목을 입력하고 개인정보 동의에 체크해주세요.");
      return;
    }

    if (isSubmitting) return;

    setIsSubmitting(true);

    const dataToSend = {
      name: formData.name,
      phone: formData.phone,
      grade: formData.grade,
      goal: goalLabels[formData.goal] || formData.goal,
      message: formData.message
    };

    const success = await submitConsultation(dataToSend);

    setIsSubmitting(false);
    if (success) {
      setSubmitted(true);
    } else {
      window.alert('전송 중 문제가 발생했습니다. 다시 시도해주세요.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="bg-blue-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* Contact Info */}
          <div className="md:w-2/5 p-8 md:p-12 bg-blue-800 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">수업 상담 문의</h3>
              <p className="text-blue-200 mb-8 md:mb-12 leading-relaxed text-sm md:text-base break-keep">
                자녀의 현재 학년과 고민되는 부분을 남겨주세요. 레벨 테스트 결과에 따른 맞춤형 학습 플랜을 제안해 드립니다.
              </p>
              
              <div className="space-y-6 text-sm md:text-base">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center shrink-0">
                    📞
                  </div>
                  <a href="tel:01038835251" className="hover:text-blue-200 transition-colors">010-3883-5251</a>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center shrink-0">
                    📧
                  </div>
                  <span className="break-all">crezard@naver.com</span>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center shrink-0">
                    📍
                  </div>
                  <a 
                    href="https://naver.me/Gdlv98jb" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-blue-200 transition-colors underline decoration-blue-400/30 hover:decoration-blue-200 underline-offset-4"
                  >
                    3단지 래미안슈르아파트
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:w-3/5 p-6 md:p-12 bg-white">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in-up py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">상담 신청 완료!</h3>
                <p className="text-gray-500">내용이 성공적으로 전달되었습니다.<br/>확인 후 빠르게 연락드리겠습니다.</p>
                <button 
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      grade: '',
                      goal: 'grammar',
                      message: ''
                    });
                    setAgreedToPrivacy(false);
                  }}
                  className="mt-8 text-blue-600 font-medium hover:underline"
                >
                  홈으로 가기
                </button>
              </div>
            ) : (
              <form noValidate className="space-y-4 md:space-y-6">
                <div className="flex gap-4">
                  <div className="w-2/3">
                    <label className="block text-sm font-medium text-gray-700 mb-2">학생/학부모님 성함 <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-base" // text-base prevents zoom on iOS
                      placeholder="이름 입력"
                    />
                  </div>
                  <div className="w-1/3">
                    <label className="block text-sm font-medium text-gray-700 mb-2">학년 <span className="text-red-500">*</span></label>
                    <select
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-base"
                    >
                      <option value="">선택</option>
                      <option value="중1">중1</option>
                      <option value="중2">중2</option>
                      <option value="중3">중3</option>
                      <option value="예비고1">예비고1</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">연락처 <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-base"
                    placeholder="010-0000-0000"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">가장 고민되는 부분</label>
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    {[
                      { id: 'grammar', label: '문법 기초' },
                      { id: 'writing', label: '서술형/영작' },
                      { id: 'grades', label: '내신 향상' },
                      { id: 'highschool', label: '고등 선행' }
                    ].map((item) => (
                      <label key={item.id} className={`
                        cursor-pointer border rounded-lg p-3 text-center text-sm font-medium transition-all
                        ${formData.goal === item.id 
                          ? 'bg-blue-50 border-blue-500 text-blue-700' 
                          : 'border-gray-200 text-gray-600 hover:border-blue-300'}
                      `}>
                        <input
                          type="radio"
                          name="goal"
                          value={item.id}
                          checked={formData.goal === item.id}
                          onChange={handleChange}
                          className="hidden"
                        />
                        {item.label}
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">추가 문의사항</label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none text-base"
                    placeholder="아이의 성향이나 특별히 집중하고 싶은 부분이 있다면 적어주세요."
                  />
                </div>

                {/* Privacy Checkbox */}
                <div className={`flex items-start gap-3 p-4 rounded-lg border transition-colors ${!agreedToPrivacy ? 'bg-red-50 border-red-100' : 'bg-gray-50 border-gray-100'}`}>
                  <div className="flex h-6 items-center">
                    <input
                      id="privacy-agreement"
                      name="privacy-agreement"
                      type="checkbox"
                      checked={agreedToPrivacy}
                      onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                      className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                  </div>
                  <div className="text-sm">
                    <label htmlFor="privacy-agreement" className="font-medium text-gray-700 cursor-pointer block">
                      개인정보 수집 및 이용 동의 <span className="text-red-500">*</span>
                    </label>
                    <p className="text-gray-500 mt-1 cursor-pointer block text-xs break-keep">
                      입력하신 내용은 상담 용도로만 이용되며, 상담 종료 후 파기됩니다.
                    </p>
                  </div>
                </div>
                
                {validationError && (
                    <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100 text-center animate-pulse">
                      ⚠️ {validationError}
                    </div>
                )}

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!isFormValid || isSubmitting}
                  className={`w-full font-bold py-4 rounded-lg transition-all shadow-lg text-lg
                    ${!isFormValid || isSubmitting
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-900 text-white hover:bg-blue-800 transform active:scale-95'
                    }`}
                >
                  {isSubmitting ? '전송 중...' : '무료 상담 신청하기'}
                </button>
                {!isFormValid && (
                  <p className="text-center text-xs text-red-400 mt-2 break-keep">
                    * 필수 항목을 모두 입력하고 동의하셔야 신청이 가능합니다.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;