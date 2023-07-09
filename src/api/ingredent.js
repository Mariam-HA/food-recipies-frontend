import instance from "./index";

const getingredent = async () => {
  const res = await instance.get("/api/ingredients");
  return res.data;
};

const createIngredent = async (name) => {
  const res = await instance.post("/api/ingredients", {
    name: name,
  });
  return res.data;
};
export { getingredent, createIngredent };
