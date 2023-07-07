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

  const recipesList = recipes?.map((recipe) => (
    <RecipeCard ket={pet.id} recipe={recipe} />
  ));
  const recipeLoading = {
    name: "Loading...",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921",
  };
  //
  if (isLoading) {
    return <RecipeCard recipe={recipeLoading} />;
  }
  return (
    <div className="flex flex-wrap gap-[30px] justify-center">
      {RecipesList}
    </div>
  );
};

export default RecipesList;
