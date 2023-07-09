import React from "react";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";

const addRecipe = () => {
  return (
    <div>
      <h1>Create New Recipe</h1>

      <input placeholder="Recipe Name" />
      <img />
      <input placeholder="description" />
      <input placeholder="Ingredients" />
      <input placeholder="Steps" />
      <input placeholder="PrepareTime" />
      <input placeholder="Tags/Category" />
      {/* <select>
        <option>Recipe</option>
        <option>Ingredient</option>
        <option>Category</option>
      </select> */}
      <button
        onclick={addRecipe}
        className=" border border-black px-5 py-1 rounded-md hover:bg-[black] hover:text-white"
      >
        Submit
      </button>
    </div>
  );
};
