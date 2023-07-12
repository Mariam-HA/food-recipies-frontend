import React from "react";
import RecipeCard from "./RecipeCard";
import { getRecipes } from "../api/recipes";
import { useQuery } from "@tanstack/react-query";

const RecipesList = ({ query }) => {
  const {
    data: recipes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["recipes"],
    queryFn: () => getRecipes(),
  });

  const recipesList = recipes
    ?.filter((recipe) => {
      return recipe.name?.toLowerCase().includes(query.toLowerCase());
    })
    ?.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />);
  const recipeLoading = {
    name: "Loading...",
    image:
      "https://cdn.dribbble.com/users/655390/screenshots/2186909/media/68150676343ae408421d3a9e743cf623.gif",
  };

  if (isLoading) {
    return (
      <div className="flex flex-wrap gap-[30px] justify-center">
        <RecipeCard recipe={recipeLoading} />;
      </div>
    );
  }
  if (error) {
    return <p>An error occurred:{error.message}</p>;
  }
  console.log(recipes);
  return (
    <div>
      <div className="flex flex-wrap gap-[30px] justify-center">
        {recipesList}
      </div>
    </div>
  );
};

export default RecipesList;
