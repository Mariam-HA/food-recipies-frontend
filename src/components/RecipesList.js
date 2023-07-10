import React, { useEffect, useState, useSyncExternalStore } from "react";
import RecipeCard from "./RecipeCard";
//import Modal from "./Modal";
import { getRecipes } from "../api/recipe";
import { useQuery } from "react-query";

const RecipesList = () => {
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
      return recipe.name.toLowerCase().includes(query.toLowerCase());
    })
    ?.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />);
  const recipeLoading = {
    name: "Loading...",
    image:
      "https://cdn.dribbble.com/users/655390/screenshots/2186909/media/68150676343ae408421d3a9e743cf623.gif",
  };
  //
  if (isLoading) {
    return <RecipeCard recipe={recipeLoading} />;
  }

  return (
    <div>
      <div className="flex flex-wrap gap-[30px] justify-center">
        {recipesList}
      </div>
      <div className="flex flex-wrap gap-[30px] text-8xl justify-center">+</div>
    </div>
  );
};

export default RecipesList;
