import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Categories from "../components/sections/CategoriesSection";
import Popular from "../components/sections/PopularSection";
import PopularScrollingCarousel from "../components/sections/PopularScrollingCarousel";
import { useRecipes } from "../context/RecipeContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const { getAllPopularRecipes } = useRecipes();
  const [popularRecipes, setPopularRecipes] = useState([]);

  // Get and shuffle popular recipes for carousel
  useEffect(() => {
    const allPopular = getAllPopularRecipes();

    // Shuffle array and duplicate some items for smooth scrolling
    const shuffled = [...allPopular]
      .sort(() => 0.5 - Math.random())
      .slice(0, Math.min(15, allPopular.length));

    setPopularRecipes(shuffled);
  }, [getAllPopularRecipes]);

  const handleGenerateClick = () => {
    navigate("/generate");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex-1">
        {/* Popular Scrolling Carousel */}

        {/* Categories Section */}
        <Categories onGenerateClick={handleGenerateClick} />
        {popularRecipes.length > 0 && (
          <div className="mb-8 bg-blue-50 py-2">
            <PopularScrollingCarousel recipes={popularRecipes} />
          </div>
        )}

        {/* Standard Popular Recipes Section */}
        {/* <Popular /> */}
      </div>
    </div>
  );
};

export default Dashboard;
