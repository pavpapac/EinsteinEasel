
import { GoogleGenAI, Type } from "@google/genai";
import { PhysicsData } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    contentType: {
        type: Type.STRING,
        description: "The type of content. Must be either 'phenomenon' or 'invention'."
    },
    physicistName: {
      type: Type.STRING,
      description: "The full name of the primary physicist (for a phenomenon) or inventor (for an invention)."
    },
    phenomenon: {
      type: Type.STRING,
      description: "A brief description of the physical phenomenon or invention identified in the scene."
    },
    mathematics: {
      type: Type.STRING,
      description: "A string containing the core mathematical formulas (for a phenomenon) or key patent information (for an invention)."
    },
    biography: {
      type: Type.STRING,
      description: "A concise biography of the physicist or inventor, around 100-150 words."
    },
    furtherLinks: {
      type: Type.ARRAY,
      description: "An array of objects, each containing a title and a URL for further reading about the person or subject.",
      items: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          url: { type: Type.STRING }
        }
      }
    },
    realWorldExamples: {
      type: Type.ARRAY,
      description: "An array of 2-3 objects, each representing a real-world example, case study, or historical anecdote related to the subject.",
      items: {
        type: Type.OBJECT,
        properties: {
          title: {
            type: Type.STRING,
            description: "A short, descriptive title for the example."
          },
          description: {
            type: Type.STRING,
            description: "A brief explanation of the example or anecdote."
          },
          link: {
            type: Type.OBJECT,
            description: "A link for further reading or watching a video about the example.",
            properties: {
              title: { type: Type.STRING },
              url: { type: Type.STRING }
            },
            required: ["title", "url"]
          }
        },
        required: ["title", "description", "link"]
      }
    }
  },
  required: ["contentType", "physicistName", "phenomenon", "mathematics", "biography", "furtherLinks", "realWorldExamples"]
};


export const fetchPhysicsData = async (scenePrompt: string): Promise<PhysicsData> => {
  const systemInstruction = `You are an AI assistant designed to be a physics and technology historian.
First, analyze the user's prompt. Your primary task is to determine if the prompt is about a natural physical phenomenon (e.g., "a rainbow after the rain", "gravity") or a man-made invention/product (e.g., "television", "how a radio works", "the first telephone"). Pay close attention to prompts that are just a single word naming an invention.

IF IT IS A PHENOMENON:
- Set the 'contentType' field to 'phenomenon'.
- The 'physicistName' field should contain the key physicist's name.
- The 'phenomenon' field should contain the phenomenon's name.
- The 'mathematics' field should contain the core mathematical formulas and brief explanations.

IF IT IS AN INVENTION:
- Set the 'contentType' field to 'invention'.
- The 'physicistName' field should contain the primary INVENTOR's name.
- The 'phenomenon' field should contain the INVENTION's name.
- The 'mathematics' field should contain key patent information (e.g., patent number, filing/issue date, and a brief, simple summary of what the patent covers).

For both cases, you must also provide a concise biography of the person (physicist or inventor), links for further reading, and 2-3 real-world examples or anecdotes.
You must respond ONLY with a JSON object that strictly adheres to the provided schema. The biography should be concise, around 100-150 words.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Analyze the following scene: "${scenePrompt}"`,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      },
    });

    const jsonText = response.text.trim();
    const data = JSON.parse(jsonText);
    return data as PhysicsData;

  } catch (error) {
    console.error("Error fetching or parsing data from Gemini API:", error);
    throw new Error("Could not retrieve physics data from the AI model.");
  }
};
