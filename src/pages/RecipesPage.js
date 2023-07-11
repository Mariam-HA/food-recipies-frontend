import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RecipeSearch from "../components/RecipeSearch";
import RecipesList from "../components/RecipesList";

const RecipesPage = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <div className="px-5 py-4 text-[30px] font-bold text-center text-black mb-0 mt-5">
        Recipes
      </div>

      <div className="">
        <RecipeSearch setQuery={setQuery} />
      </div>

      <RecipesList query={query} />
      <div className="flex justify-center m-8">
        <button
          onClick={() => {
            navigate("/addrecipe");
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Add New Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipesPage;
