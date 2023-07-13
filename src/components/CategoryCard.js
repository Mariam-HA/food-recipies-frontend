import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import { getById } from "../api/categoriess";

export const CategoryCard = ({ category }) => {
  const queryClient = useQueryClient();

  const {
    data: categories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["category"],
    queryFn: () => getById(),
  });

  const handleSubmit = () => {
    getById();
  };

  return (
    <div className="w-[350px] h-[360px] flex flex-col bg-white border border-gray-300 rounded-md shadow-lg overflow-hidden m-4">
      <img
        src={`http://localhost:8000/${category.catImage}`}
        alt={`${category.name}-image`}
        className="w-full h-[50%] object-cover"
      />
      <div className="p-4 flex flex-col justify-between items-center text-[33px]">
        <h1 className="text-md font-bold mb-2">{category.name}</h1>
      </div>
      <div className="flex items-center justify-center">
        <Link to={`/category/${category._id}`}>
          <button
            typy="button"
            className="px-4 py-2 w-[240px]  bg-sky-950 text-white rounded-md hover:bg-sugar-white hover:text-sky-950 transition-colors  text-center"
            // onClick={() => {
            //   handleSubmit(id);
            // }}
          >
            Recipes
          </button>
        </Link>
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
