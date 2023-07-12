import instance from "./index";

const getRecipes = async () => {
  const res = await instance.get("/recipes");
  return res.data;
};
const getRecipeById = async (id) => {
  const res = await instance.get(`/recipes/${id}`);
  return res.data;
};

// const createRecipe = async (
//   name,
//   ingredients,
//   image,
//   steps,
//   decription,
//   prepareTime
// ) => {
//   const res = await instance.post("/recipes", {
//     name: name,
//     ingredients: ingredients,
//     image: image,
//     steps: steps,
//     decription: decription,
//     prepareTime: prepareTime,
//   });
//   return res.data;
// };
const createRecipe = async (recipeInfo) => {
  const formData = new FormData();
  for (const key in recipeInfo) {
    if (Array.isArray(recipeInfo[key])) {
      recipeInfo[key].forEach((e) => {
        formData.append(key, e);
      });
    } else {
      formData.append(key, recipeInfo[key]);
    }
  }

  const res = await instance.post("/recipes", formData);
  return res.data;
};

const deleteRecipe = async (id) => {
  const res = await instance.delete(`/recipes/${id}`);
  return res.data;
};
const categoryAdd = async (id) => {
  const res = await instance.put(`/recipes/${id}`);
  return res.data;
};

export { getRecipes, getRecipeById, deleteRecipe, createRecipe, categoryAdd };
