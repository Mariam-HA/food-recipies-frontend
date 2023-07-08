import React from "react";
import { Link } from "react-router-dom";

//waiting for the frofile page!!
//Dont forget to put it in the profile page !!
const UserRecipeCard = ({ recipe }) => {
  return (
    <div className="w-[300px] h-[400px]  border border-black rounded-md flex flex-col justify-between items-center p-4">
      <img
        src={recipe.image}
        alt={`${recipe.name}}-image`}
        classNmae="w-[200px] rounded-md"
      />

      <h1 className="text-md font-bold">{recipe.name}</h1>

      <button
        onclick={deleteApi}
        className=" border border-black px-5 py-1 rounded-md hover:bg-[black] hover:text-white"
      >
        Delete
      </button>

      <Link to={`/recipes/${recipe.id}`}>
        <button
          onclick={updateApi}
          className=" border border-black px-5 py-1 rounded-md hover:bg-[black] hover:text-white"
        >
          Update
        </button>
      </Link>
    </div>
  );
};
export default UserRecipeCard;
