export enum ClassType {
  BUSINESS = '비즈니스 영어',
  CONVERSATION = '일상 회화',
  TEST_PREP = '시험 대비 (TOEIC/TOEFL/OPIc)',
  JUNIOR = '주니어/유학 대비'
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export interface AIResponse {
  corrected: string;
  explanation: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}