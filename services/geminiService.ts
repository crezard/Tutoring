import { GoogleGenAI, Type } from "@google/genai";
import { AIResponse, QuizQuestion } from "../types";

// Initialize AI with API key from environment variables
// Using Vite's import.meta.env for browser compatibility
// Use optional chaining to prevent crashes if env is undefined
const apiKey = import.meta.env?.VITE_API_KEY || "";
const ai = new GoogleGenAI({ apiKey: apiKey });

export const checkGrammarWithAI = async (text: string): Promise<AIResponse> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Correct the following English sentence naturally and explain the correction briefly in Korean: "${text}"`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            corrected: {
              type: Type.STRING,
              description: "The corrected English sentence.",
            },
            explanation: {
              type: Type.STRING,
              description: "Brief explanation of the error and correction in Korean.",
            },
          },
          required: ["corrected", "explanation"],
        },
      },
    });

    const resultText = response.text;
    if (!resultText) {
      throw new Error("No response from AI");
    }

    return JSON.parse(resultText) as AIResponse;
  } catch (error) {
    console.error("AI Service Error:", error);
    throw error;
  }
};

export const generateQuiz = async (grade: string): Promise<QuizQuestion[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Generate 20 English multiple-choice questions for a Korean middle school student in ${grade} (Year ${grade.replace('중', '')}).
      The questions should cover grammar and vocabulary suitable for this level.
      The output must be a JSON array of 20 question objects.
      Each question must have 4 options.
      Include a brief explanation in Korean for the correct answer.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.INTEGER },
              question: { type: Type.STRING },
              options: { 
                type: Type.ARRAY, 
                items: { type: Type.STRING } 
              },
              answerIndex: { 
                type: Type.INTEGER, 
                description: "0-based index of the correct option (0, 1, 2, or 3)" 
              },
              explanation: { 
                type: Type.STRING, 
                description: "Brief explanation in Korean" 
              }
            },
            required: ["id", "question", "options", "answerIndex", "explanation"]
          }
        }
      }
    });

    const resultText = response.text;
    if (!resultText) {
      throw new Error("No response from AI");
    }

    return JSON.parse(resultText) as QuizQuestion[];
  } catch (error) {
    console.error("Quiz Generation Error:", error);
    throw error;
  }
};