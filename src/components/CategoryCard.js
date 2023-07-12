import React from "react";

export const CategoryCard = ({ category }) => {
  return (
    <div className="w-[350px] min-h-[350px] flex flex-col bg-white border border-gray-300 rounded-md shadow-lg overflow-hidden">
      <img
        src={`http://localhost:8000/${category.catImage}`}
        alt={`${category.name}-image`}
        className="w-full h-[40%] object-cover"
      />
      <div className="p-4 flex flex-col justify-between">
        <h1 className="text-md font-bold mb-2">{category.name}</h1>
      </div>
    </div>
  );
};

export default CategoryCard;

{
  /* <Link to={`/api/category/${category.id}`}>
                <button className=" border border-black px-5 py-1 rounded-md hover:bg-[black] hover:text-white">
                    
                </button>
            </Link> */
}
