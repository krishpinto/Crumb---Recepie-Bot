"use client";

import React, { useState } from "react";
import { GoogleGenAI } from "@google/genai";

const CookieRecipes = () => {
  const [userInput, setUserInput] = useState<string>(""); // State for user input
  const [responseText, setResponseText] = useState<string | null>(null); // State for API response

  const fetchRecipes = async () => {
    const ai = new GoogleGenAI({
      apiKey: "AIzaSyDBnfjAHRKYzeTOq-wETbJ4hkXNPdwLAns",
    });

    const prompt = `List a few popular recipes based on the input "${userInput}" using this JSON schema:

        Recipe = {'recipeName': string}
        Return: Array<Recipe>`;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
      });
      setResponseText(response.text ?? null);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setResponseText("Failed to fetch recipes.");
    }
  };

  return (
    <div>
      <h1>Recipes</h1>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)} // Update userInput state on change
        placeholder="Enter a keyword for recipes"
      />
      <button onClick={fetchRecipes}>Fetch Recipes</button>
      {responseText && (
        <div>
          <h2>Response:</h2>
          <pre>{responseText}</pre>
        </div>
      )}
    </div>
  );
};

export default CookieRecipes;
