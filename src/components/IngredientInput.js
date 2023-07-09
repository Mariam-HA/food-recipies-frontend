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

  return (
    <div>
      IngredientInput
      <input></input>
    </div>
  );
};

export default IngredientInput;
