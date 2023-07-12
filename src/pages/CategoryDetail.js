import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getById } from "../api/categoriess";
import CategoryCard from "../components/CategoryCard";
import RecipeCard from "../components/RecipeCard";
import RecipeSearch from "../components/RecipeSearch";
import RecipesList from "../components/RecipesList";

const CategoryDetail = () => {
  const { categoryId } = useParams();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const {
    data: category,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["category", categoryId],
    queryFn: () => getById(categoryId),
  });

  const catLoading = {
    name: "loading ...",
  };

  if (isLoading) {
    return (
      <div className="flex flex-wrap gap-[30px] justify-center">
        <CategoryCard category={catLoading} />
        <CategoryCard category={catLoading} />
        <CategoryCard category={catLoading} />
        <CategoryCard category={catLoading} />
        <CategoryCard category={catLoading} />
        <CategoryCard category={catLoading} />
        <CategoryCard category={catLoading} />
        <CategoryCard category={catLoading} />
      </div>
    );
  }

  const recipesList = category?.recipes
    ?.filter((recipe) => {
      return recipe.name?.toLowerCase().includes(query.toLowerCase());
    })
    ?.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />);

  return (
    <div className="">
      <div className="px-5 py-4 text-[55px] font-extrabold text-center text-black mb-0 mt-5">
        {category.name}
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
        {recipesList}
      </div>
    </div>
  );
};

export default CategoryDetail;
