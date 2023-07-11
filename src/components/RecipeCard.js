import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="w-[300px] min-h-[400px]  border border-black rounded-md flex flex-col justify-between items-center p-4">
      <h1 className="text-md font-bold">{recipe.name}</h1>
      <img
        src={`http://localhost:8000/${recipe.recipeImage}`}
        alt={`${recipe.name}-image`}
        className="w-[170px] rounded-md"
      />
      <div className="bg-slate-500 text-white rounded-md p-3">
        {recipe.createdBy?.username}
      </div>
      <div>ingredients:</div>
      <div className="flex flex-wrap gap-[15px]">
        {recipe.ingredients?.map((ingredient) => {
          return (
            <div className="p-3 rounded-md bg-blue-200">{ingredient.name}</div>
          );
        })}
      </div>

      <div>categories:</div>
      <div className="flex flex-wrap gap-[15px]">
        {recipe.categories?.map((categorie) => {
          return (
            <div className="p-3 rounded-md bg-red-200">{categorie.name}</div>
          );
        })}
      </div>
    </div>
  );
};
export default RecipeCard;
