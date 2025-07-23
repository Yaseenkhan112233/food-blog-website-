import chineseRecipes from "./chineseRecipes";
import italianRecipes from "./italianRecipes";
import fastFoodRecipes from "./fastFoodRecipes";
import healthyRecipes from "./healthyRecipes";
import barRecipes from "./barRecipes";
import desiRecipes from "./desiRecipes";

// Combine all recipe categories
const allRecipes = {
  chinese: chineseRecipes,
  italian: italianRecipes,
  fastFood: fastFoodRecipes,
  healthy: healthyRecipes,
  bar: barRecipes,
  desi: desiRecipes,
};

export default allRecipes;
