import instance from "./index";

const getRecipes = async () => {
  const res = await instance.get("/recipes");
  return res.data;
};
const getRecipeById = async (id) => {
  const res = await instance.get(`/recipes/${id}`);
  return res.data;
};
export { getRecipes, getRecipeById };
