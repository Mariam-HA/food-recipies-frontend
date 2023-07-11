import React from "react";

const RecipeSearch = ({ setQuery }) => {
  return (
    <div>
      <div className="flex flex-wrap gap-[30px] justify-center">
        <div className="text-lg font-bold text-center mt-10 ml-7">Search</div>
        <input
          className=" w-[500px] h-[50px] m-8 border"
          placeholder="Search for a Recipe"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default RecipeSearch;
