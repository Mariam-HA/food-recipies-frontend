import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { createIngredent, getingredent } from "../api/ingredent";
import { createRecipe } from "../api/recipes";
import IngredientInput from "../components/IngredientInput";

const RecipeForm = () => {
  const queryClient = useQueryClient();
  const [recipeName, setRecipeName] = useState("");
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [newIngredientName, setNewIngredientName] = useState("");
  const [showIngredientInput, setShowIngredientInput] = useState(false);

  // Queries
  const { data: ingredients, isLoading } = useQuery({
    queryKey: ["'ingredients'"],
    queryFn: getingredent,
  });

  // Mutations
  const { mutate: createRecipeFun } = useMutation({
    mutationFn: createRecipe,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["recipe"] });
    },
  });

  const { mutate: createIngredientFun } = useMutation({
    mutationFn: createIngredent,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["ingredients"] });
      setShowIngredientInput(false);
    },
  });
  const handleIngredientChange = (e) => {
    const value = e.target.value;
    if (value === "add") {
      setShowIngredientInput(true);
    } else {
      setSelectedIngredient(value);
      setShowIngredientInput(false);
    }
  };

  //   const handleNewIngredientSubmit = () => {
  //     createRecipeFun({ name: newIngredientName });
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: recipeName,
      ingredients: [],
    };
    if (selectedIngredient) {
      data.ingredients.push(selectedIngredient);
    }
    // if (newIngredientName) {
    //   data.ingredients.push(newIngredientName);
    // }
    createRecipeFun(data);
  };
  return (
    <div>
      RecipeForm
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
          placeholder="enter recipe name"
        />
        <select value={selectedIngredient} onChange={handleIngredientChange}>
          <option value="">Select an ingredient..</option>
          {ingredients.map((ingredient) => (
            <option key={ingredient.id} value={ingredient.id}>
              {ingredient.name}
            </option>
          ))}
          <option value="add">Add new ingredient</option>
        </select>
        {showIngredientInput && (
          <IngredientInput onSubmit={() => setNewIngredientName} />
        )}
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
};

export default RecipeForm;
