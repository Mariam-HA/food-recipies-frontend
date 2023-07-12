import React, { useState } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import IngredientInput from "../components/IngredientInput";
import { createRecipe } from "../api/recipes";
import { createIngredent } from "../api/ingredent";
import CategoryInput from "../components/CategoryInput";
import { useNavigate } from "react-router-dom";

const AddRecipe = () => {
  const queryClient = useQueryClient();
  const [recipeInfo, setRecipeInfo] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  // Queries

  //Mutations
  const { mutate: createRecipeFun } = useMutation({
    mutationFn: (data) => createRecipe(data),
    onSuccess: () => {
      // Invalidate and refetch
      // alert("hello");
      queryClient.invalidateQueries({ queryKey: ["recipe"] });
      navigate("/recipe");
    },
  });

  const { mutate: createIngredientFun } = useMutation({
    mutationFn: createIngredent,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["ingredients"] });
    },
  });

  const addIngredientToList = (i) => {
    const foundIn = ingredients.find((ind) => ind.name == i.name);
    if (!foundIn) setIngredients([...ingredients, i]);
  };
  const addCategoryToList = (i) => {
    const foundCa = categories.find((ind) => ind.name == i.name);
    if (!foundCa) setCategories([...categories, i]);
  };

  const deleteIngredientToList = (i) => {
    const newList = ingredients.filter(
      (ingredient) => ingredient.name != i.name
    );
    setIngredients(newList);
  };
  const deleteCategoryToList = (i) => {
    const newList = categories.filter(
      (categories) => categories.name != i.name
    );
    setCategories(newList);
  };

  // handel function
  const handleSubmit = () => {
    // createRecipeFun(recipeInfo);

    createRecipeFun({
      ...recipeInfo,
      ingredients: ingredients.map((i) => i._id),
      categories: categories.map((i) => i._id),
      //categories: [],
    });

    //createRecipeFun({ ...recipeInfo, ingredients });
  };

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100 ">
      <div className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 ">
        <h1 className="mb-4 text-xl font-extrabold text-center">
          Create New Recipe
        </h1>

        <div className="mb-4">
          <p className="m-1 font-bold"> Recipe Name</p>
          <input
            className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter recipe name"
            value={recipeInfo.recipeName}
            onChange={(e) =>
              setRecipeInfo({ ...recipeInfo, name: e.target.value })
            }
          />
        </div>

        {/* <div className="mb-4">
          <p className="m-1 font-bold"> Recipe Introduction</p>
          <textarea
            onChange={(e) =>
              setRecipeInfo({ ...recipeInfo, introduction: e.target.value })
            }
            className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Introduction"
          />
        </div> */}

        <div className="mb-4">
          <p className="m-1 font-bold"> Upload Your Recipe Image </p>
          <input
            type="file"
            onChange={(e) => {
              setRecipeInfo({ ...recipeInfo, recipeImage: e.target.files[0] });
            }}
          />
        </div>

        <div className="mb-4">
          <p className="m-1 font-bold"> Recipe Description </p>
          <textarea
            className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            // type="text"
            onChange={(e) =>
              setRecipeInfo({ ...recipeInfo, description: e.target.value })
            }
            placeholder="Description"
          />
        </div>

        <div className="mb-4">
          <IngredientInput addIngredientToList={addIngredientToList} />
          <div className="flex gap-1 flex-wrap">
            {ingredients.map((i) => (
              <div
                className="px-2 py-1 rounded m-1 text-sm bg-slate-300 border-gray-300   text-black max-w-xs overflow-hidden"
                onClick={() => {
                  deleteIngredientToList(i);
                }}
              >
                {i.name}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <p className="m-1 font-semibold"> Recipe Instructions </p>
          <textarea
            onChange={(e) =>
              setRecipeInfo({ ...recipeInfo, steps: e.target.value })
            }
            className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Steps"
          />
        </div>

        <div className="mb-4">
          <p className="m-1 font-bold"> Prepare Time </p>
          <input
            onChange={(e) =>
              setRecipeInfo({ ...recipeInfo, prepareTime: e.target.value })
            }
            className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Prepare Time"
          />
        </div>

        <div className="mb-4">
          {/* <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Category"
          /> */}
          <CategoryInput addCategoryToList={addCategoryToList} />
          <div className="flex gap-[15px] flex-wrap">
            {categories.map((i) => (
              <div
                className="px-2 py-1 rounded m-1 text-sm bg-slate-300 border-gray-300   text-black max-w-xs overflow-hidden"
                onClick={() => {
                  deleteCategoryToList(i);
                }}
              >
                {i.name}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="">
            <button
              onClick={() => {
                handleSubmit();
              }}
              className="flex items-end justify-center px-5 py-3 bg-sky-950 text-white rounded-md transition-colors"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddRecipe;

// {ingredients.map((ingredient, index) => (
// <p key={index}>{ingredient}</p>
// ))}
