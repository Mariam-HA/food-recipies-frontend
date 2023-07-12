import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import { getRecipeById } from "../api/recipes";

const RecipeDetails = () => {
  const { recipeId } = useParams();

  const { data: recipe, isLoading } = useQuery({
    queryKey: ["recipe", recipeId],
    queryFn: () => getRecipeById(recipeId),
  });

  if (isLoading) return <h1> Loading..</h1>;

  return (
    <div>
      <h1>Name:{recipe.name}</h1>
      <p>{recipe.name}</p>
      {/* <p>Created by: {recipe.user.username}</p>
      <p>{recipe.description}</p> */}
    </div>
  );
};
export default RecipeDetails;
