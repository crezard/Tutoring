
export interface TestResultData {
  name: string;
  phone: string;
  grade: string;
  score: number;
  total: number;
  level: string;
  timestamp: string;
}

export interface ConsultationData {
  name: string;
  phone: string;
  grade: string;
  goal: string;
  message: string;
}

// ⚠️ 중요: 이 URL을 본인의 Google Apps Script 배포 URL로 교체해야 합니다.
// Google Sheet > 확장 프로그램 > Apps Script > 배포 > 새 배포 > 웹 앱 > 권한: '모든 사용자'
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyBQe3tzWNH-yu6_N7KfvYsdjxmlYSDQspe-lR-e2spLSk2_8kUASOVuCwFmkngWG-N2w/exec';

const submitData = async (payload: any): Promise<boolean> => {
  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Google Apps Script로 전송 시 CORS 정책 우회를 위해 필요
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    return true;
  } catch (error) {
    console.error("Error submitting to Google Sheet:", error);
    return false;
  }
};

export const submitTestResult = async (data: TestResultData): Promise<boolean> => {
  return submitData(data);
};

export const submitConsultation = async (data: ConsultationData): Promise<boolean> => {
  // 기존 스크립트 컬럼(점수, 총점, 레벨)에 맞춰서 상담 데이터를 매핑하여 전송합니다.
  // 점수 -> 상담목표
  // 총점 -> "상담신청" (구분값)
  // 레벨 -> 메시지
  const payload = {
    name: data.name,
    phone: data.phone,
    grade: data.grade,
    score: data.goal,       // 점수 컬럼에 '목표' 저장
    total: "상담신청",       // 총점 컬럼에 '상담신청' 텍스트 저장
    level: data.message,    // 레벨 컬럼에 '메시지' 저장
    timestamp: new Date().toISOString()
  };
  
  return submitData(payload);
};
