"use client";

import React, { useState } from "react";
import { GoogleGenAI } from "@google/genai";

const CookieRecipes = () => {
  const [userInput, setUserInput] = useState<string>(""); // State for user input
  const [recipes, setRecipes] = useState<{ recipeName: string }[]>([]); // State for recipes
  const [ingredients, setIngredients] = useState<string | null>(null); // State for ingredients
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // State for error messages

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

      console.log("Raw API Response:", response.text); // Debugging: Log the raw response

      // Sanitize and parse the response
      if (response.text) {
        try {
          // Remove any non-JSON content (e.g., backticks or extra formatting)
          const sanitizedResponse = response.text
            .trim()
            .replace(/```json|```/g, "");
          const parsedResponse = JSON.parse(sanitizedResponse);
          setRecipes(parsedResponse);
          setErrorMessage(null);
        } catch (parseError) {
          console.error("Error parsing JSON:", parseError);
          setErrorMessage("Invalid JSON format in API response.");
        }
      } else {
        setErrorMessage("Empty response from API.");
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setErrorMessage("Failed to fetch recipes.");
    }
  };

  const fetchIngredients = async (recipeName: string) => {
    const ai = new GoogleGenAI({
      apiKey: "AIzaSyDBnfjAHRKYzeTOq-wETbJ4hkXNPdwLAns",
    });

    const prompt = `Provide the ingredients required for the recipe "${recipeName}" using this JSON schema:

        Ingredients = {'ingredientName': string, 'quantity': string}
        Return: Array<Ingredients>`;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
      });

      console.log("Raw API Response for Ingredients:", response.text); // Debugging: Log the raw response

      // Sanitize and set the ingredients
      if (response.text) {
        const sanitizedResponse = response.text
          .trim()
          .replace(/```json|```/g, "");
        setIngredients(sanitizedResponse);
        setErrorMessage(null);
      } else {
        setErrorMessage("Empty response from API.");
      }
    } catch (error) {
      console.error("Error fetching ingredients:", error);
      setErrorMessage("Failed to fetch ingredients.");
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
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {recipes.length > 0 && (
        <div>
          <h2>Recipes:</h2>
          <ul>
            {recipes.map((recipe, index) => (
              <li
                key={index}
                onClick={() => fetchIngredients(recipe.recipeName)}
                style={{ cursor: "pointer" }}
              >
                {recipe.recipeName}
              </li>
            ))}
          </ul>
        </div>
      )}
      {ingredients && (
        <div>
          <h2>Ingredients:</h2>
          <pre>{ingredients}</pre>
        </div>
      )}
    </div>
  );
};

export default CookieRecipes;
