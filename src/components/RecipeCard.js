import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="w-[300px] h-[400px]  border border-black rounded-md flex flex-col justify-between items-center p-4">
      <img
        src={recipe.image}
        alt={`${recipe.name}}-image`}
        classNmae="w-[200px] rounded-md"
      />

      <h1 className="text-md font-bold">{recipe.name}</h1>
      <p className="text-md font-bold"> "Created by:"" ={recipe.createdBy}</p>
      <p className="text-md font-bold"> "Rating:"" ={recipe.rating}</p>
      <p className="text-md font-bold"> "views:" = {recipe.clickCounter}</p>

      <Link to={`/recipes/${recipe.id}`}>
        <button className=" border border-black px-5 py-1 rounded-md hover:bg-[black] hover:text-white">
          View
        </button>
      </Link>
    </div>
  );
};
export default RecipeCard;
