
// import React from "react";
// import RecipeCard from "../components/cards/RecipeCard";
// import { useRecipes } from "../context/RecipeContext";

// const SavedPage = () => {
//   const {
//     getSavedRecipes,
//     loading,
//     clearAllSavedRecipes,
//     savedRecipeIds
//   } = useRecipes();

//   const savedRecipes = getSavedRecipes();

//   const handleClearAll = () => {
//     if (window.confirm("Are you sure you want to remove all saved recipes?")) {
//       clearAllSavedRecipes();
//     }
//   };

//   return (
//     <div className="p-4">
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-bold text-slate-800">
//           Saved Recipes ({savedRecipes.length})
//         </h1>
//         {savedRecipes.length > 0 && (
//           <button
//             onClick={handleClearAll}
//             className="px-4 py-2 bg-[#C3CEF0] text-white rounded-md hover:bg-bg-[#C6CEf0] transition-colors duration-200"
//           >
//             Clear All
//           </button>
//         )}
//       </div>

//       {loading ? (
//         <div className="text-center py-12">
//           <div className="animate-spin inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mb-4"></div>
//           <p className="text-lg text-gray-500">Loading your saved recipes...</p>
//         </div>
//       ) : savedRecipes.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {savedRecipes.map((recipe) => (
//             <RecipeCard
//               key={recipe.id}
//               id={recipe.id}
//               image={recipe.image}
//               title={recipe.title}
//               subtitle={recipe.subtitle}
//               rating={recipe.rating}
//               cookTime={recipe.cookTime}
//               servings={recipe.servings}
//             />
//           ))}
//         </div>
//       ) : (
//         <div className="text-center py-12">
//           <div className="text-6xl mb-4">🍳</div>
//           <p className="text-lg text-gray-500">No saved recipes yet.</p>
//           <p className="text-gray-400 mt-2">
//             Recipes you save will appear here and be stored locally in your browser.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SavedPage;


import React from "react";
import RecipeCard from "../components/cards/RecipeCard";
import { useRecipes } from "../context/RecipeContext";

const SavedPage = () => {
  const {
    getSavedRecipes,
    loading,
    clearAllSavedRecipes,
    savedRecipeIds
  } = useRecipes();

  const savedRecipes = getSavedRecipes();

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to remove all saved recipes?")) {
      clearAllSavedRecipes();
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-neue font-medium text-3xl text-slate-800">
          Saved Recipes ({savedRecipes.length})
        </h1>
        {savedRecipes.length > 0 && (
          <button
            onClick={handleClearAll}
            className="font-neue font-normal px-4 py-2 bg-[#C3CEF0] text-white rounded-md hover:bg-bg-[#C6CEf0] transition-colors duration-200"
          >
            Clear All
          </button>
        )}
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mb-4"></div>
          <p className="font-neue font-light text-lg text-gray-500">Loading your saved recipes...</p>
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
          <div className="text-6xl mb-4">🍳</div>
          <p className="font-neue font-light text-lg text-gray-500">No saved recipes yet.</p>
          <p className="font-neue font-light text-gray-400 mt-2">
            Recipes you save will appear here and be stored locally in your browser.
          </p>
        </div>
      )}
    </div>
  );
};

export default SavedPage;