import { INGREDIENT_KEY } from "../queryKeys/queryKeys";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import {
  createIngredent,
  deleteIngredient,
  getingredent,
} from "../api/ingredent";
import Fuse from "fuse.js";

const options = {
  includeScore: true, // to get the similarity score along with the search results
  keys: ["name"],
};

const IngredientInput = ({ addIngredientToList }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestedIngredients, setSuggestedIngredients] = useState([]);
  const [errorAddind, setErrorAddind] = useState("");
  const queryClient = useQueryClient();

  const resetErrorAdd = () => {
    setTimeout(() => {
      setErrorAddind("");
    }, 2000);
  };
  // Queries
  const {
    data: ingredients,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["ingredients"],
    queryFn: () => getingredent(),
  });

  // Mutations
  const mutation = useMutation(createIngredent, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["ingredients"] });
    },
  });
  const deleteMutation = useMutation(deleteIngredient, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["ingredients"] });
    },
  });
  const handleDelete = (ingredientId) => {
    deleteMutation.mutate({ id: ingredientId });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const existingIngredient = ingredients.find(
      (ingredient) => ingredient.name.toLowerCase() === inputValue.toLowerCase()
    );

    if (existingIngredient) {
      // Handle if ingredient already exists
      setErrorAddind("ingredient already exists");
      resetErrorAdd();
      return "";
      //console.log("Ingredient already exists:", existingIngredient);
    } else {
      // Handle adding new ingredient
      mutation.mutate(inputValue);
    }

    // setInputValue(""); // clear the input field

    setInputValue("");
  };

  const handleInputChange = (input) => {
    setInputValue(input);

    //checks the trimmed value of the input is not an empty string.
    if (input.trim() !== "") {
      const fuse = new Fuse(ingredients, options);
      const result = fuse.search(input);
      const matches = result.map((item) => item.item);

      setSuggestedIngredients(matches);
    } else {
      setSuggestedIngredients([]);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-[17px] font-bold m-2 mt-4">Ingredient Input</h1>
      {/* <form onSubmit={handleSubmit}> */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
        placeholder="Enter ingredient"
      />
      <div className="flex gap-[15px]">
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-gray-400 hover:bg-gray-500 text-white rounded px-4 py-2"
        >
          Add Ingredient
        </button>

        <div className="text-red-300">{errorAddind}</div>
      </div>
      {/* </form> */}

      {suggestedIngredients.length > 0 && (
        <ul className="mt-4">
          {suggestedIngredients.map((ingredient) => (
            <li
              key={ingredient.name}
              className="bg-gray-100 p-2 mb-2 rounded"
              onClick={() => {
                addIngredientToList(ingredient);
              }}
            >
              {ingredient.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default IngredientInput;

// with delete

// {suggestedIngredients.length > 0 && (
//     <ul className="mt-4">
//       {suggestedIngredients.map((ingredient) => (
//         <li
//           key={ingredient}
//           className="bg-gray-100 p-2 mb-2 rounded flex justify-between items-center "
//         >
//           <span>{ingredient}</span>
//           <span>
//             {/* Check if the current user is the creator of the ingredient */}
//             {ingredient.createdBy === user.id && (
//               <button
//                 onClick={() => handleDelete(ingredient.id)}
//                 className="text-red-700"
//               >
//                 Delete
//               </button>
//             )}
//           </span>
//         </li>

// {mutation.isLoading ? (
//   <div className="mt-4">Adding ingredient...</div>
// ) : mutation.isError ? (
//   <div className="mt-4 text-red-500">Error: {mutation.error.message}</div>
// ) : mutation.isSuccess ? (
//   <div className="mt-4 text-green-500">
//     Ingredient added successfully!
//   </div>
// ) : null}
