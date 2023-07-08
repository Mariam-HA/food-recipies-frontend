import instance from "./index";

const getRecipes = async () => {
  const res = await instance.get("/recipes");
  return res.data;
};
const getRecipeById = async (id) => {
  const res = await instance.get(`/recipes/${id}`);
  return res.data;
};

const createRecipe = async (
  name,
  ingredients,
  image,
  steps,
  decription,
  prepareTime
) => {
  const res = await instance.post("/recipes", {
    name: name,
    ingredients: ingredients,
    image: image,
    steps: steps,
    decription: decription,
    prepareTime: prepareTime,
  });
  return res.data;
};

const deleteRecipe = async (id) => {
  const res = await instance.delete(`/recipes/${id}`);
  return res.data;
};

export { getRecipes, getRecipeById, deleteRecipe, createRecipe };
