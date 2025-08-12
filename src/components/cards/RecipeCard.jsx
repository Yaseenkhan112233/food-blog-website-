import React from "react";
import { Star, Heart, Clock, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useRecipes } from "../../context/RecipeContext";
import { useAuth } from "../../context/AuthContext";

const RecipeCard = ({
  id,
  image,
  title,
  subtitle,
  rating = 4.5,
  cookTime = "30 min",
  servings = 4,
}) => {
  const navigate = useNavigate();
  const { isRecipeSaved, toggleSaveRecipe } = useRecipes();
  const { isLoggedIn, openLoginModal } = useAuth();

  const isSaved = isRecipeSaved(id);

  const handleSaveClick = (e) => {
    e.stopPropagation();

    if (isLoggedIn) {
      toggleSaveRecipe(id);
    } else {
      openLoginModal();
    }
  };

  const handleCardClick = () => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-[#DADBE0] rounded-xl overflow-hidden  hover:shadow-md transition-all duration-300 cursor-pointer group"
    >
      {/* Recipe Image / Header */}
      <div className="h-40 sm:h-48 md:h-52 relative overflow-hidden">
        {typeof image === "string" && image.startsWith("http") ? (
          <img
            src={image}
            alt={`${title} ${subtitle}`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-orange-200 to-orange-300 flex items-center justify-center">
            <span className="text-4xl sm:text-5xl">{image}</span>
          </div>
        )}

        <button
          onClick={handleSaveClick}
          className={`absolute top-3 right-3 p-2 rounded-full ${
            isSaved ? "bg-red-500 text-white" : "bg-white text-slate-600"
          } hover:scale-110 transition-all duration-200 shadow-md`}
        >
          <Heart className={`w-4 h-4 ${isSaved ? "fill-current" : ""}`} />
        </button>
      </div>

      {/* Card Content */}
      <div className="p-3 sm:p-4">
        <div className="flex justify-between items-start mb-2">
          <div className="w-full">
            <h4 className="font-semibold text-base sm:text-lg text-slate-800 mb-1 truncate">
              {title}
            </h4>
            <p className="text-sm text-slate-600 truncate">{subtitle}</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-between text-sm text-slate-500 gap-2">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span>{rating}</span>
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{cookTime}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{servings}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
