import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { categoryAdd } from "../api/recipes";

const RecipesByCategory = ({ recipes }) => {
  const queryClient = useQueryClient();
  const { categoryName } = useParams();

  const filteredRecipes = recipes.filter(
    (recipe) => recipe.category === categoryName
  );
  const { mutate: toCategory } = useMutation({
    mutationFn: categoryAdd,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["category"] });
      // navigate("/recipe");
    },
  });
  return (
    <div>
      <h2>Recipes for Category: {categoryName}</h2>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default RecipesByCategory;
