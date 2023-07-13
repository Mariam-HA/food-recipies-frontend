import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RecipeSearch from "../components/RecipeSearch";
import RecipesList from "../components/RecipesList";

const RecipesPage = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <div className="px-5 py-4 text-[55px] font-extrabold text-center text-black mb-0 mt-5">
        Recipes
      </div>
      <div className="flex justify-center">
        <div className="flex items-center flex-row gap-6">
          <RecipeSearch setQuery={setQuery} />
          <div className="flex justify-center text-center m-4">
            <button
              onClick={() => navigate("/addrecipe")}
              className="px-4 py-2 h-[45px] w-[220xpx] bg-sky-950 text-white rounded-md  hover:bg-blue-600 transition-colors"
            >
              Add New Recipe
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-[30px] justify-center">
        <RecipesList query={query} />
      </div>
    </div>
  );
};

export default RecipesPage;
