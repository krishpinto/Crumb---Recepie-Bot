import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
if (!apiKey) {
  throw new Error('GEMINI_API_KEY is not set in environment variables');
}

export const fetchRecipesAPI = async (userInput: string) => {
  const ai = new GoogleGenAI({ apiKey: apiKey });

  const prompt = `List a few popular recipes based on the input "${userInput}" using this JSON schema:

        Recipe = {'recipeName': string}
        Return: Array<Recipe>`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    console.log("Raw API Response:", response.text); // Log the raw response

    if (response.text) {
      const sanitizedResponse = response.text
        .trim()
        .replace(/```json|```/g, "");
      return JSON.parse(sanitizedResponse);
    } else {
      throw new Error("Empty response from API.");
    }
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};

export const fetchIngredientsAPI = async (recipeName: string) => {
    const ai = new GoogleGenAI({ apiKey: apiKey });

  const prompt = `Provide the ingredients required for the recipe "${recipeName}" using this JSON schema:

        Ingredients = {'ingredientName': string, 'quantity': string}
        Return: Array<Ingredients>`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    console.log("Raw API Response for Ingredients:", response.text); // Debugging: Log the raw response

    if (response.text) {
      return response.text.trim().replace(/```json|```/g, "");
    } else {
      throw new Error("Empty response from API.");
    }
  } catch (error) {
    console.error("Error fetching ingredients:", error);
    throw error;
  }
};
