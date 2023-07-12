import React from "react";

const RecipeSearch = ({ setQuery }) => {
  return (
    <div>
      <div className="flex justify-center items-center text-black py-5">
        {/* <div className="text-2xl font-semibold  text-center">Search</div> */}
        <div className="">
          <input
            className=" w-[545px] h-[55px] m-8 border"
            placeholder=" Search for a Recipe"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RecipeSearch;
