// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";
// import { useRecipes } from "../context/RecipeContext";
// import RecipeCard from "../components/cards/RecipeCard";

// const categoryTitles = {
//   chinese: "Chinese Cuisine",
//   italian: "Italian Cuisine",
//   fastFood: "Fast Food",
//   healthy: "Healthy Meals",
//   bar: "Bar Food",
//   desi: "Desi Cuisine",
// };

// const CategoryPage = () => {
//   const { category } = useParams();
//   const navigate = useNavigate();
//   const { getRecipesByCategory, getPopularRecipesByCategory } = useRecipes();

//   const recipes = getRecipesByCategory(category);
//   const popularRecipes = getPopularRecipesByCategory(category);

//   const handleBack = () => {
//     navigate(-1);
//   };

//   if (!recipes || recipes.length === 0) {
//     return (
//       <div className="p-6 text-center">
//         <button
//           onClick={handleBack}
//           className="flex items-center text-slate-600 hover:text-slate-800 mb-6"
//         >
//           <ArrowLeft className="w-4 h-4 mr-1" />
//           <span>Back</span>
//         </button>
//         <h1 className="text-3xl font-bold text-slate-800 mb-4">
//           Category Not Found
//         </h1>
//         <p>We couldn't find any recipes in this category.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="">
//       <button
//         onClick={handleBack}
//         className="flex items-center text-slate-600 hover:text-slate-800 mb-6"
//       >
//         <ArrowLeft className="w-4 h-4 mr-1" />
//         <span>Back</span>
//       </button>

//       <h1 className="text-3xl font-bold text-slate-800 mb-8">
//         {categoryTitles[category] || "Category"}
//       </h1>
//       {/* All Dishes in Category */}
//       <div>
//         <h2 className="text-2xl font-bold text-slate-800 mb-6">
//           All {categoryTitles[category]} Dishes
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {recipes.map((recipe) => (
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
//       </div>

//       {/* Popular Dishes in Category */}
//       {popularRecipes.length > 0 && (
//         <div className="mt-10">
//           <h2 className="text-2xl font-bold text-slate-800 mb-6">
//             Popular {categoryTitles[category]} Dishes
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {popularRecipes.map((recipe) => (
//               <RecipeCard
//                 key={recipe.id}
//                 id={recipe.id}
//                 image={recipe.image}
//                 title={recipe.title}
//                 subtitle={recipe.subtitle}
//                 rating={recipe.rating}
//                 cookTime={recipe.cookTime}
//                 servings={recipe.servings}
//               />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CategoryPage;
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useRecipes } from "../context/RecipeContext";
import RecipeCard from "../components/cards/RecipeCard";

const categoryTitles = {
  chinese: "Chinese Cuisine",
  italian: "Italian Cuisine",
  fastFood: "Fast Food",
  healthy: "Healthy Meals",
  bar: "Bar Food",
  desi: "Desi Cuisine",
};

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { getRecipesByCategory, getPopularRecipesByCategory } = useRecipes();

  const recipes = getRecipesByCategory(category);
  const popularRecipes = getPopularRecipesByCategory(category);

  const handleBack = () => {
    navigate(-1);
  };

  if (!recipes || recipes.length === 0) {
    return (
      <div className="p-6 text-center">
        <button
          onClick={handleBack}
          className="flex items-center font-neue font-normal text-slate-600 hover:text-slate-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          <span>Back</span>
        </button>
        <h1 className="font-neue font-medium text-3xl text-slate-800 mb-4">
          Category Not Found
        </h1>
        <p className="font-neue font-light">We couldn't find any recipes in this category.</p>
      </div>
    );
  }

  return (
    <div className="">
      <button
        onClick={handleBack}
        className="flex items-center font-neue font-normal text-slate-600 hover:text-slate-800 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        <span>Back</span>
      </button>

      <h1 className="font-neue font-medium text-3xl text-slate-800 mb-8">
        {categoryTitles[category] || "Category"}
      </h1>

      {/* All Dishes in Category */}
      <div>
        <h2 className="font-neue font-medium text-2xl text-slate-800 mb-6">
          {/* All {categoryTitles[category]} Dishes */}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
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
      </div>

      {/* Popular Dishes in Category */}
      {popularRecipes.length > 0 && (
        <div className="mt-10">
          <h2 className="font-neue font-medium text-2xl text-slate-800 mb-6">
            Popular {categoryTitles[category]} Dishes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {popularRecipes.map((recipe) => (
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
        </div>
      )}
    </div>
  );
};

export default CategoryPage;