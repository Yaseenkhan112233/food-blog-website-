import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { Star, Heart, Clock, Users, ArrowLeft } from "lucide-react";
import { useRecipes } from "../context/RecipeContext";
import { useAuth } from "../context/AuthContext";

const RecipeDetailPage = () => {
  const { id } = useParams();
  const recipeId = parseInt(id, 10);
  const navigate = useNavigate();
  const { getRecipeById, isRecipeSaved, toggleSaveRecipe } = useRecipes();
  const { isLoggedIn, openLoginModal } = useAuth();
  const [selectedImage, setSelectedImage] = useState(0);

  const recipe = getRecipeById(recipeId);

  useEffect(() => {
    // Redirect to dashboard if recipe not found
    if (!recipe) {
      navigate("/");
      return;
    }

    // Set the first image as selected by default when recipe changes
    if (recipe?.images?.length > 0) {
      setSelectedImage(0);
    }

    // If user is not logged in, show login modal
    if (!isLoggedIn) {
      openLoginModal();
    }
  }, [recipe, navigate, isLoggedIn, openLoginModal]);

  // If recipe doesn't exist or user is not logged in, redirect to home
  if (!recipe) {
    return null; // This will be handled by the useEffect redirect
  }

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  const handleSaveRecipe = () => {
    if (isLoggedIn) {
      toggleSaveRecipe(recipe.id);
    } else {
      openLoginModal();
    }
  };

  const handleBack = () => {
    navigate(-1); // Go back to previous page
  };

  const hasMultipleImages = recipe.images && recipe.images.length > 1;

  return (
    <div className="max-w-7xl mx-auto bg-gray-50 pb-12">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="flex items-center text-slate-600 hover:text-slate-800 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        <span>Back</span>
      </button>

      {/* Recipe Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
        {recipe.title} {recipe.subtitle}
      </h1>

      {/* Recipe Images */}
      {recipe.images && recipe.images.length > 0 ? (
        <div className="mb-8">
          {/* Main Image */}
          <div className="rounded-xl overflow-hidden shadow-md mb-4">
            <img
              src={recipe.images[selectedImage]}
              alt={`${recipe.title} ${recipe.subtitle}`}
              className="w-full h-80 md:h-96 object-cover"
            />
          </div>

          {/* Thumbnail Gallery */}
          {hasMultipleImages && (
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {recipe.images.map((img, index) => (
                <div
                  key={index}
                  className={`rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ${
                    index === selectedImage
                      ? "ring-2 ring-orange-500"
                      : "opacity-70 hover:opacity-100"
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={img}
                    alt={`${recipe.title} thumbnail ${index + 1}`}
                    className="w-24 h-16 object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="bg-gradient-to-br from-orange-200 to-orange-300 h-60 rounded-xl flex items-center justify-center mb-8">
          <span className="text-8xl">{recipe.image}</span>
        </div>
      )}

      {/* Recipe Meta Info */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div className="flex flex-wrap justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center text-slate-500 mb-2">
              <div className="flex items-center mr-4">
                <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                <span>{recipe.rating}</span>
              </div>
              <div className="flex items-center mr-4">
                <Clock className="w-4 h-4 mr-1" />
                <span>{recipe.cookTime}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                <span>{recipe.servings} servings</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleSaveRecipe}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              isRecipeSaved(recipe.id)
                ? "bg-red-500 text-white"
                : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
            }`}
          >
            <Heart
              className={`w-4 h-4 ${
                isRecipeSaved(recipe.id) ? "fill-current" : ""
              }`}
            />
            <span>{isRecipeSaved(recipe.id) ? "Saved" : "Save Recipe"}</span>
          </button>
        </div>

        <p className="text-slate-600">{recipe.description}</p>
      </div>

      {/* Ingredients Section */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Ingredients</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {recipe.ingredients.map((ingredient, idx) => (
            <div
              key={idx}
              className="bg-gray-100 px-3 py-1 rounded-full text-sm"
            >
              {ingredient}
            </div>
          ))}
        </div>
      </div>

      {/* Cooking Method Section */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">
          Cooking Method
        </h2>
        <ol className="space-y-4">
          {recipe.instructions.map((step, idx) => (
            <li key={idx} className="flex">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center mr-4 mt-0.5">
                {idx + 1}
              </span>
              <span className="flex-grow">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetailPage;
