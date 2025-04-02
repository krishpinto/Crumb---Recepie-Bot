"use client";

import React, { useState } from "react";
import SearchBar from "@/components/search-bar";
import RecipeResults from "@/components/recipe-results";
import Footer from "@/components/Footer"; // Import the Footer component
import { fetchRecipesAPI, fetchIngredientsAPI } from "../utils/api";

export default function Home() {
  const [userInput, setUserInput] = useState<string>(""); // State for user input
  const [recipes, setRecipes] = useState<{ recipeName: string }[]>([]); // State for recipes
  const [ingredients, setIngredients] = useState<string | null>(null); // State for ingredients
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // State for error messages

  // Fetch recipes based on user input
  const fetchRecipes = async () => {
    try {
      const recipes = await fetchRecipesAPI(userInput);
      setRecipes(recipes);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage("Failed to fetch recipes.");
    }
  };

  // Fetch ingredients for a specific recipe
  const fetchIngredients = async (recipeName: string) => {
    try {
      const ingredients = await fetchIngredientsAPI(recipeName);
      setIngredients(ingredients);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage("Failed to fetch ingredients.");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 flex flex-col justify-between">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-8 text-4xl font-bold text-orange-800 md:text-5xl lg:text-6xl">
            Tasty<span className="text-orange-500">Recipes</span>
          </h1>
          <p className="mb-12 max-w-2xl text-center text-gray-600">
            Discover thousands of delicious recipes from around the world.
            Search for your favorite dishes or ingredients below.
          </p>
          {/* Search Bar */}
          <SearchBar
            value={userInput} // Pass the userInput state as the value
            onChange={(e) => setUserInput(e.target.value)} // Update userInput state on change
            onSearch={fetchRecipes} // Trigger fetchRecipes on search
          />
          {/* Recipe Results */}
          <RecipeResults
            recipes={recipes} // Pass the recipes state
            onRecipeClick={fetchIngredients} // Trigger fetchIngredients when a recipe is clicked
          />
          {/* Error Message */}
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          {/* Ingredients Section */}
          {ingredients && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-orange-800">
                Ingredients:
              </h2>
              <ul className="bg-orange-100 text-orange-900 p-4 rounded border border-orange-300 shadow-md list-disc list-inside">
                {JSON.parse(ingredients).map(
                  (
                    ingredient: { ingredientName: string; quantity: string },
                    index: number
                  ) => (
                    <li key={index}>
                      <span className="font-semibold">
                        {ingredient.ingredientName}:
                      </span>{" "}
                      {ingredient.quantity}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </main>
  );
}
