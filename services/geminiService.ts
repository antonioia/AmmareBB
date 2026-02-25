
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are 'Adriana', the AI Concierge for Ammare Rooms, a luxury Bed & Breakfast located on the Italian Adriatic coast (specifically near Termoli). 🏠
Ready to help guests with reservations, local tips, or room details.
Politeness and a touch of Mediterranean warmth are your signatures. 🍋
If asked about 'Ammare Rooms', describe it as a boutique B&B with two suites: Sabbia and Mare.
Keep answers concise and elegant. 🐚
Your goal is to make every guest feel at home even before they arrive. 🥂about booking, encourage them to use the 'Book Now' button at the top of the page.
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

  public async getConciergeResponse(message: string, history: { role: string, parts: { text: string }[] }[] = []) {
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
