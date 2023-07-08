import React from "react";
import backgroundsearch from "../media/search2.jpg";

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Top Half */}
      <div className=" bg-red-600">
        {/* Card */}
        <div
          className="flex items-center justify-center"
          style={{
            background: `url(${backgroundsearch})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="m-10 p-10 ">
            <h1 className="text-[88px] text-opacity-80 text-center font-bold mb-6 text-white">
              Find a Recipe
            </h1>
            <form className="flex flex-col justify-center items-center">
              <input
                type="text"
                placeholder="Enter recipe name"
                className="p-2 border-2  rounded-lg w-[500px]"
              />
              <button
                type="submit"
                className="p-2 bg-orange-600 text-white font-bold rounded-lg mt-4 w-[500px]"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className=" bg-white">{/* Your Content here */}</div>
    </div>
  );
};

export default Home;
