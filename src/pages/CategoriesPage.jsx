import React from "react";
import Categories from "../components/sections/CategoriesSection";

const CategoriesPage = () => {
  const handleCategoryClick = (category) => {
    console.log("Category clicked:", category);
    // Navigate to specific category page or filter recipes
  };

  const handleGenerateClick = () => {
    console.log("Generate recipe clicked");
    // Navigate to recipe generator
  };

  return (
    <div className="p-4">
      {/* <h1 className="text-3xl font-bold text-slate-800 mb-8">Categories</h1> */}
      <Categories
        onCategoryClick={handleCategoryClick}
        onGenerateClick={handleGenerateClick}
      />
    </div>
  );
};

export default CategoriesPage;
