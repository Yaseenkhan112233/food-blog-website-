const RecipeCard = ({ recipe }) => {
  return (
    <div className="border rounded-xl shadow p-4">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="rounded-md mb-2 w-full"
      />

      <h2 className="text-lg font-semibold">{recipe.title}</h2>
      <p className="text-sm text-gray-600">{recipe.description}</p>
    </div>
  );
};

export default RecipeCard;
