import React from "react";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  return (
    <div>
      <SearchBar />
      <h1> {category.name} </h1>
      <RecipeCard />
    </div>
  );
};

export default Recipes;
