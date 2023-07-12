import React from "react";

export const SearchBar = ({ setQuery }) => {
  return (
    <div>
      <div className="flex flex-wrap gap-[30px] justify-center">
        <div className="text-lg font-bold text-center mt-10 ml-7"></div>
        <input
          className=" w-[500px] h-[50px] m-8 border"
          placeholder="Search for a Category"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
    </div>
  );
};
export default SearchBar;
