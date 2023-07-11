import instance from "./index";

const getingredent = async () => {
  const res = await instance.get("/ingredients");
  return res.data;
};

const createIngredent = async (name) => {
  const res = await instance.post("/ingredients", {
    name: name,
  });
  return res.data;
};

const deleteIngredient = async (id) => {
  const res = await instance.delete(`/ingredients/${id}`);
};

const addNewIngredientToRecipe = async (recipeId, name) => {
  const res = await instance.post(`/recipes/${recipeId}/ingredients`, { name });
  return res.data;
};

const addExistingIngredientToRecipe = async (recipeId, name) => {
  const res = await instance.post(`/recipes/${recipeId}/ingredients`, {
    name: name,
  });
  return res.data;
};

export {
  getingredent,
  createIngredent,
  deleteIngredient,
  addNewIngredientToRecipe,
  addExistingIngredientToRecipe,
};
