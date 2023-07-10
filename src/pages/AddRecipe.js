import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import { useQueryClient } from "@tanstack/react-query";
import IngredientInput from "../components/IngredientInput";

const AddRecipe = () => {
  const queryClient = useQueryClient();
  const [recipeName, setRecipeName] = useState("");
  const [showIngredientInput, setShowIngredientInput] = useState(false);

  // Queries

  //Mutations

  // handel function

  // handle submit

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100">
      <form className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="mb-4 text-xl font-bold text-center">
          Create New Recipe
        </h1>

        <div className="mb-4">
          <input
            className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter recipe name"
          />
        </div>

        <div className="mb-4">
          <input
            className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Introduction"
          />
        </div>

        <div className="mb-4">
          <img
            className="w-full h-[150px] rounded-md object-cover"
            alt="Recipe"
          />
        </div>

        <div className="mb-4">
          <input
            className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Description"
          />
        </div>

        <div className="mb-4">
          <IngredientInput />
        </div>

        <div className="mb-4">
          <input
            className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Steps"
          />
        </div>

        <div className="mb-4">
          <input
            className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Prepare Time"
          />
        </div>

        <div className="mb-4">
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Category"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={() => {}}
            className="bg-slate-500 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddRecipe;
