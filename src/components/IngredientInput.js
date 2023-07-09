import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getingredent } from "../api/ingredent";

const IngredientInput = () => {
  const [inputValue, setInputValue] = useState("");
  const {
    data: ingredients,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["ingredients"],
    queryFn: () => getingredent(),
  });

  return <div>IngredientInput</div>;
};

export default IngredientInput;

// let fuse = new Fuse(ingredients, {
//     keys: ["name"],
//     threshold: 0.3,
//   });

//   let results = fuse.search(inputValue);

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleAddIngredient = async () => {
//     const result = await createIngredent(inputValue);
//     console.log(result); // do something with the result
//     setInputValue(""); // clear the input field
//   };
{
  /* <input type="text" value={inputValue} onChange={handleInputChange} />
<button onClick={handleAddIngredient}>Add Ingredient</button>
{isLoading && <p>Loading...</p>}
{/* {error && <p>Error loading ingredients</p>} */
}

// {results.map(({ item }, index) => (
//   <p key={index}>{item.name}</p>
// ))}
