import React from "react";
import Popular from "../components/sections/PopularSection";

const PopularPage = () => {
  const handleRecipeClick = (recipe) => {
    console.log("Recipe clicked:", recipe);
    // Navigate to recipe details page
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-slate-800 mb-8">
        Popular Recipes
      </h1>
      <Popular onRecipeClick={handleRecipeClick} />
    </div>
  );
};

export default PopularPage;
