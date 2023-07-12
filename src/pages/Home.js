import React, { useState } from "react";
import RecipeSearch from "../components/RecipeSearch";
import RecipesList from "../components/RecipesList";
import backgroundsearch from "../media/bake.jpg";

const Home = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="flex flex-col">
      {/* Top Half */}
      <div className="">
        {/* Card */}
        <div
          className="flex items-center justify-center"
          style={{
            background: `url(${backgroundsearch})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="m-6 p-10 ">
            <h1 className="text-[88px]  text-center font-bold  text-white">
              Find a Recipe
            </h1>
            <div className="">
              <RecipeSearch setQuery={setQuery} />
            </div>
          </div>
        </div>
        <div className="m-9">
          <RecipesList query={query} />
        </div>
      </div>

      <div className=" bg-white">{/* Your Content here */}</div>
    </div>
  );
};

export default Home;
