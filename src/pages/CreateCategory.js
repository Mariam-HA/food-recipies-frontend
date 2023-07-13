import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { addCategory } from "../api/categoriess";
import { useNavigate } from "react-router-dom";

const CreateCategory = ({ setshowModal }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [category, setCategory] = useState({});
  const { mutate: addCategoryFun } = useMutation({
    mutationFn: () => addCategory(category),
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]);
      navigate("/categories");
      setshowModal(false);
    },
  });
  console.log(category);
  const handleChange = (e) => {
    if (e.target.files) {
      setCategory({ ...category, [e.target.name]: e.target.files[0] });
    } else {
      setCategory({ ...category, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = () => {
    addCategoryFun();
  };

  return (
    <div className="">
      <div className="flex justify-center flex-col"></div>
      <div className="font-bold text-center m-6">Create Category</div>
      <div className="flex justify-center gap-6 m-4 ">
        <h1 className=""> Name</h1>
        <input
          className="w-[500px] px-5  py-1 text-gray-700 bg-gray-200 rounded"
          name="name"
          onChange={handleChange}
        />
      </div>
      <div className="flex gap-6 m-4">
        <h1>Image</h1>

        <input
          className="w-[500px] px-5  py-1 text-gray-700 bg-gray-200 rounded"
          name="catImage"
          type="file"
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center justify-center mt-12">
        <button
          className="flex items-end justify-center px-5 py-3 bg-sky-950 text-white rounded-md hover:bg-sugar-white hover:text-sky-950 transition-colors"
          onClick={() => {
            handleSubmit();
          }}
        >
          Create
        </button>
      </div>
      {/* <div className="w-[300px] h-[200px]  border border-black rounded-md flex flex-col justify-between items-center p-4">
                <h1 className="text-md font-bold">{category.name}</h1>
                <img
                    src={category.image}
                    alt={`${category.name}-image`}
                    className="w-[200px] rounded-md
                "
                
                />
            </div> */}
    </div>
  );
};

export default CreateCategory;
