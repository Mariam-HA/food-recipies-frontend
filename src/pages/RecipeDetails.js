import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../api/recipes";

const RecipeDetails = () => {
  const { recipeId } = useParams();

  const {
    data: recipe,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["recipe", recipeId],
    queryFn: () => getRecipeById(recipeId),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) {
    console.error(error);
    return <p>An error occurred while fetching the recipe</p>;
  }
  console.log(recipe);
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6  mt-6 overflow-y-auto h-screen">
      <h1 className="text-[35px] font-extrabold text-black mb-4">
        {recipe.name}
      </h1>
      <img
        className="w-full h-64 object-cover rounded-md mb-6"
        src={`http://localhost:8000/${recipe.recipeImage}`}
        alt={recipe.name}
      />
      <p className="mb-2">
        <span className="text-[20px] font-bold text-black">Created by:</span>{" "}
        {recipe.createdBy?.username}
      </p>

      <p className="mb-2 text-gray-700">
        {" "}
        <span className="text-[20px] font-bold text-black">
          Recipe Description:
        </span>
        {recipe.description}
      </p>

      <h2 className="text-[20px] font-bold text-black">Ingredients:</h2>
      <ul className="list-disc pl-5 mb-4">
        {recipe.ingredients?.map((ingredient, index) => (
          <li key={index} className="mb-1">
            {ingredient.name}
          </li>
        ))}
      </ul>

      <h2 className="text-[20px] font-bold text-black">Recipe Instructions</h2>
      <ol className="list-decimal pl-5">
        {recipe.steps?.map((step, index) => (
          <li key={index} className="mb-1">
            {step}
          </li>
        ))}
      </ol>
      <p className="mb-2">
        <span className="text-[20px] font-bold text-black">
          Preparation time:
        </span>
        {recipe.prepareTime}
      </p>
      <h2 className="text-[20px] font-bold text-black">Categories:</h2>
      <ul className="list-disc pl-5 mb-4">
        {recipe.categories?.map((categories, index) => (
          <li key={index} className="mb-1">
            {categories.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDetails;
