import React from "react";
import RecipeCard from "../components/cards/RecipeCard";
import { useRecipes } from "../context/RecipeContext";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const SavedPage = () => {
  const { getSavedRecipes, loading } = useRecipes();
  const { isLoggedIn, openLoginModal } = useAuth();

  const savedRecipes = getSavedRecipes();

  // If user is not logged in, redirect to login
  if (!isLoggedIn) {
    // Show login modal
    openLoginModal();
    // Redirect to home
    return <Navigate to="/" />;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-slate-800 mb-8">Saved Recipes</h1>

      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mb-4"></div>
          <p className="text-lg text-gray-500">Loading your saved recipes...</p>
        </div>
      ) : savedRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {savedRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              image={recipe.image}
              title={recipe.title}
              subtitle={recipe.subtitle}
              rating={recipe.rating}
              cookTime={recipe.cookTime}
              servings={recipe.servings}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-gray-500">No saved recipes yet.</p>
          <p className="text-gray-400 mt-2">
            Recipes you save will appear here.
          </p>
        </div>
      )}
    </div>
  );
};

export default SavedPage;
