import { useState } from "react";
import Sidebar from "../components/Sidebar";
import RecipeCard from "../components/RecipeCard";
import { useRecipes } from "../context/RecipeContext";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { recipes, loading } = useRecipes();

  const categories = [
    "All",
    "Pakistani",
    "Chinese",
    "Indian",
    "Italian",
    "American",
    "Dessert",
  ];

  const filteredRecipes =
    selectedCategory === "All"
      ? recipes
      : recipes.filter((recipe) => recipe.category === selectedCategory);

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isSidebarOpen} />

      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="sm:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-md"
      >
        ☰
      </button>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 overflow-y-auto bg-white mt-12 sm:mt-0">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">
          Featured Food Recipes
        </h1>

        {/* Categories */}
        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
                selectedCategory === cat
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Loader */}
        {loading ? (
          <div className="text-center text-orange-500 text-lg animate-pulse mt-12">
            Loading recipes...
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredRecipes.length > 0 ? (
              filteredRecipes.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} />
              ))
            ) : (
              <p className="text-center text-gray-600">No recipes found.</p>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
