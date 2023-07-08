import React from "react";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  return (
    <div>
      <SearchBar />
      <h1> {recipe.name} </h1>

      <RecipesList />
    </div>
  );
};

export default Recipes;
