import React from "react";
import { INGREDIENT_KEY, RECIPE_KEY } from "../../queryKeys/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getingredent } from "../../api/ingredent";
import { getRecipes } from "../../api/recipes";
import RecipeCard from "../RecipeCard";

const RecipeForm = () => {
  const [filterQuery, setFilterQuery] = useState("");

  const {
    data: ingredients,
    isLoading,
    error,
  } = useQuery({
    queryKey: [INGREDIENT_KEY],
    queryFn: () => getingredent(),
  });
  const { data: recipe } = useQuery({
    queryKey: [RECIPE_KEY],
    queryFn: () => getRecipes(),
  });

  const handleFilterChange = (event) => {
    setFilterQuery(event.target.value);
    // const recipe1 =
  };

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
    <form>
      <div>
        <div>
          <div>
            <label>Recipe name : </label>
            <input>
              type="text" value={filterQuery}
              onChange={handleFilterChange}
            </input>
          </div>
          <div></div>
        </div>
      </div>
    </form>
  );
};

export default RecipeForm;
