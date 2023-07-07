import instance from "./index";

const getCategory = async () => {
  const res = await instance.get("/api/category/");
  return res.data;
};
const getById = async (id) => {
  const res = await instance.get(`/api/category/${id}`);
  return res.data;
};
const addCategory = async (name, catImage) => {
  const res = await instance.post("/api/category/", {
    name: name,
    image: catImage,
  });
  return res.data;
};
const putCategory = async (id, name, catImage) => {
  const res = await instance.put(`/api/category/${id}`, {
    name: name,
    image: catImage,
  });
  return res.data;
};
const deleteCategory = async (id) => {
  const res = await instance.delete(`/api/category/${id}`);
  return res.data;
};

export { getCategory, addCategory, getById, deleteCategory, putCategory };
