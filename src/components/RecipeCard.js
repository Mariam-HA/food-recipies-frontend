import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="w-[450px] h-[560px] flex flex-col bg-white border border-gray-300 rounded-md shadow-lg overflow-scroll m-9">
      <img
        src={`http://localhost:8000/${recipe.recipeImage}`}
        alt={`${recipe.name}-image`}
        className="w-full h-[40%] object-cover"
      />
      <div className="p-4 flex flex-col justify-evenly">
        <h1 className="text-[33px] font-semibold mb-2 text-center">
          {recipe.name}
        </h1>
        <div className="text-base text-gray-500 mb-2">
          Created by: {recipe.createdBy?.username}
        </div>
        <div>
          <div className="text-gray-700 font-bold">Ingredients:</div>
          <div className="">
            <div className="flex flex-wrap gap-[15px]">
              {recipe.ingredients?.map((ingredient) => {
                return <li className="text-gray-700">{ingredient.name}</li>;
              })}
            </div>
          </div>
        </div>
        <div className="mt-2">
          <div className="text-gray-700 font-bold">Categories:</div>
          <div className="flex flex-wrap gap-[15px]">
            {recipe.categories?.map((categorie) => {
              return <li className="text-gray-700">{categorie.name}</li>;
            })}
          </div>
        </div>
        <Link
          to={`/recipedetails/${recipe._id}`}
          className="px-4 py-2 mt-12 bg-sky-950 text-white rounded-md hover:bg-sugar-white hover:text-sky-950 transition-colors  text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
