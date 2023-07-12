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

      <div className="flex flex-col  item-center mb-4">
        <RecipeSearch setQuery={setQuery} />
        <div className="flex justify-center text-center m-4">
          <button
            onClick={() => navigate("/addrecipe")}
            className="px-4 py-2 h-[45px] w-[220xpx] bg-orange text-white rounded-md hover:bg-orange-dark transition-colors"
          >
            Add New Recipe
          </button>
        </div>
      </div>

      <RecipesList query={query} />
    </div>
  );
};

export default RecipesPage;
