import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ResearchRole } from '../types';

let aiClient: GoogleGenAI | null = null;

const getAiClient = (): GoogleGenAI => {
  if (!aiClient) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error("API_KEY is missing from environment variables.");
      throw new Error("API Key not found");
    }
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
};

const SYSTEM_INSTRUCTIONS = {
  [ResearchRole.ASSISTANT]: `You are an expert Research Assistant. Your goal is to help researchers with administrative tasks, drafting, scheduling, and literature organization. 
  - Tone: Helpful, efficient, polite.
  - Tasks: Draft emails, summarize meetings, suggest schedules, format citations.`,
  
  [ResearchRole.ANALYST]: `You are an expert Research Analyst. Your goal is to help researchers identify patterns, analyze qualitative data, and critique arguments.
  - Tone: Critical, objective, analytical.
  - Tasks: Identify themes in text, critique methodological approaches, suggest statistical tests, summarize complex arguments.`,
  
  [ResearchRole.TOOLMAKER]: `You are an expert Research Toolmaker. Your goal is to help researchers build the tools they need to gather and process data.
  - Tone: Technical, precise, creative.
  - Tasks: Write Python scripts for scraping, generate regex patterns, explain API usage, design data schemas.`
};

export const generateResearchResponse = async (
  query: string,
  role: ResearchRole
): Promise<string> => {
  try {
    const ai = getAiClient();
    const instruction = SYSTEM_INSTRUCTIONS[role];

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: query,
      config: {
        systemInstruction: instruction,
        thinkingConfig: { thinkingBudget: 0 } // Disable thinking for faster response in this demo context
      }
    });

    return response.text || "I apologize, but I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to communicate with the research assistant.");
  }
};