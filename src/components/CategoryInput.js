import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { addCategory, getCategory } from "../api/categoriess";
import Fuse from "fuse.js";
const options = {
  includeScore: true, // to get the similarity score along with the search results
  keys: ["name"],
};
const CategoryInput = ({ addCategoryToList }) => {
  const [inputValue, setInputValue] = useState({ name: "" });
  const [suggestedCategory, setSuggestedCategory] = useState([]);
  const [errorAddind, setErrorAddind] = useState("");
  const queryClient = useQueryClient();

  const resetErrorAdd = () => {
    setTimeout(() => {
      setErrorAddind("");
    }, 2000);
  };

  // Queries
  const {
    data: categories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["category"],
    queryFn: () => getCategory(),
  });

  // Mutations
  const mutation = useMutation(addCategory, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["category"] });
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const existingCategory = categories.find(
      (categories) =>
        categories.name.toLowerCase() === inputValue.name.toLowerCase()
    );

    if (existingCategory) {
      // Handle if ingredient already exists
      setErrorAddind("category already exists");
      resetErrorAdd();
      return "";
      //console.log("Ingredient already exists:", existingIngredient);
    } else {
      // Handle adding new ingredient
      mutation.mutate(inputValue);
    }

    // setInputValue(""); // clear the input field

    setInputValue({ name: "" });
  };

  const handleInputChange = (input) => {
    setInputValue({ name: input });

    //checks the trimmed value of the input is not an empty string.
    if (input.trim() !== "") {
      const fuse = new Fuse(categories, options);
      const result = fuse.search(input);
      const matches = result.map((item) => item.item);

      setSuggestedCategory(matches);
    } else {
      setSuggestedCategory([]);
    }
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="max-w-md mx-auto">
        <h1 className="text-[17px] font-bold m-2 mt-4">Categories Input</h1>
        {/* <form onSubmit={handleSubmit}> */}
        <input
          type="text"
          value={inputValue.name}
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
            Add Categorie
          </button>

          <div className="text-red-300">{errorAddind}</div>
        </div>
        {/* </form> */}

        {suggestedCategory.length > 0 && (
          <ul className="mt-4">
            {suggestedCategory.map((categories) => (
              <li
                key={categories.name}
                className="bg-gray-100 p-2 mb-2 rounded"
                onClick={() => {
                  addCategoryToList(categories);
                }}
              >
                {categories.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CategoryInput;
