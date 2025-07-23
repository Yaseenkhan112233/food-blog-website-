import React from "react";
import RecipeCard from "../cards/RecipeCard";
import { useRecipes } from "../../context/RecipeContext";

const Popular = () => {
  const { getAllPopularRecipes } = useRecipes();
  const popularRecipes = getAllPopularRecipes();

  return (
    <section className="mt-10">
      {/* <h2 className="text-2xl font-bold text-slate-800  text-center md:text-left">
        Popular
      </h2> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
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
    </section>
  );
};

export default Popular;
