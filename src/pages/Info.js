import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getRecipeById } from "../api/recipes";
import RecipeCard from "../components/RecipeCard";

const Info = () => {
  const { recipeId } = useParams();
  const {
    data: recipe,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["recipe", recipeId],
    queryFn: () => getRecipeById(recipeId),
  });
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div>
      Info
      <RecipeCard recipe={recipe} />
    </div>
  );
};

export default Info;
