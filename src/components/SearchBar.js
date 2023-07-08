import React from "react";

export const SearchBar = () => {
  return (
    <div>
      <input placeholder="Search" />
      <select>
        <option>Recipe</option>
        <option>Ingredient</option>
        <option>Category</option>
      </select>
    </div>
  );
};
