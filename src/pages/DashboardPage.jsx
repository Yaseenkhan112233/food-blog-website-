import React from "react";
import { useNavigate } from "react-router-dom";
import Categories from "../components/sections/CategoriesSection";
import Popular from "../components/sections/PopularSection";
import { useRecipes } from "../context/RecipeContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const { getAllPopularRecipes } = useRecipes();

  const handleGenerateClick = () => {
    // Navigate to a future recipe generator page
    alert("Recipe generator feature is coming soon!");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 ">
      <div className="flex-1 ">
        {/* Welcome Section */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">
            Welcome to RecipeGen
          </h1>
          <p className="text-slate-600">
            Discover amazing recipes from around the world. Browse by
            categories, check our popular dishes, or save your favorites for
            later.
          </p>
        </div>

        {/* Categories Section */}
        <Categories onGenerateClick={handleGenerateClick} />

        {/* Popular Recipes Section */}
        <Popular />
      </div>
    </div>
  );
};

export default Dashboard;
