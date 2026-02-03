
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are 'Adriana', the AI Concierge for Adriatica Soul, a luxury Bed & Breakfast located on the Italian Adriatic coast (specifically near Polignano a Mare). 
Your goal is to help guests plan their stay and get them excited about booking.
Speak with an elegant, warm, and inviting tone. 
Mention local delights like orecchiette pasta, hidden sea caves, crystal clear water, and the warm Mediterranean sun.
If they ask about booking, encourage them to use the 'Book Now' button at the top of the page.
Keep responses concise but evocative.
`;

export class GeminiService {
  private static instance: GeminiService;
  private ai: any;

  private constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  public static getInstance(): GeminiService {
    if (!GeminiService.instance) {
      GeminiService.instance = new GeminiService();
    }
    return GeminiService.instance;
  }

  public async getConciergeResponse(message: string, history: {role: string, parts: {text: string}[]}[] = []) {
    try {
      const response = await this.ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [...history, { role: 'user', parts: [{ text: message }] }],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.8,
          maxOutputTokens: 250,
        },
      });
      return response.text;
    } catch (error) {
      console.error("Gemini Error:", error);
      return "I apologize, the sea breeze seems to have interrupted our connection. Please try again or reach out to us directly!";
    }
  }
}
