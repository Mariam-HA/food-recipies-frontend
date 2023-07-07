import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
//import { deletePet, getPet, updatePet } from "../api/pets";

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const [recipe, setRcipe] = useState({});

  const fetchApi = async () => {
    const res = await getRecipe(recipeId);
    setRecipe(res);
  };

  useEffect(() => {
    fetchApi();
  }, []);
};
export default RecipreDetails;
