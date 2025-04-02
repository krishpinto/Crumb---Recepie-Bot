"use client";

import React from "react";

interface Recipe {
  recipeName: string;
}

interface RecipeResultsProps {
  recipes: Recipe[];
  onRecipeClick: (recipeName: string) => void;
}

const RecipeResults: React.FC<RecipeResultsProps> = ({
  recipes,
  onRecipeClick,
}) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-orange-800">Recipes:</h2>
      <ul className="mt-4 space-y-2">
        {recipes.map((recipe, index) => (
          <li
            key={index}
            onClick={() => onRecipeClick(recipe.recipeName)} // Handle recipe click
            className="cursor-pointer text-orange-600 hover:underline"
          >
            {recipe.recipeName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeResults;
