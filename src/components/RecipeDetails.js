import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getRecipeById } from "../api/recipes";
//import { deletePet, getPet, updatePet } from "../api/pets";

const RecipeDetails = () => {
  const { recipeId } = useParams();

  // const [recipe, setRcipe] = useState({});

  // const fetchApi = async () => {
  //   const res = await getRecipe(recipeId);
  //   setRecipe(res);
  // };

  // useEffect(() => {
  //   fetchApi();
  // }, []);

  const { data: recipe, isLoading } = useQuery({
    queryKey: ["recipe"],
    queryFn: () => getRecipeById(recipeId),
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>{recipe.name}</p>
      <p>Created by: {recipe.user.username}</p>
      <p>{recipe.description}</p>
    </div>
  );
};
export default RecipeDetails;
