import instance from "./index"


const getCategory = async () => {
  const res = await instance.get("/categories/");
  return res.data;
};
const getById = async (id) => {
  const res = await instance.get(`/categories/${id}`);
  return res.data;
};
const addCategory = async (category) => {

  const formData = new FormData();
  for (const key in category) formData.append(key, category[key]);

  const res = await instance.post("/categories/", formData);
  return res.data;
};

const putCategory = async (id, name, catImage) => {
  const category = {
    name: name,
    catImage: catImage
  }
  const formdata = new FormData()
  for (const key in category) formdata.append(key, category[key])
  const res = await instance.put(`/categories/${id}`, formdata);
  return res.data;
};
const deleteCategory = async (id) => {
  const res = await instance.delete(`/categories/${id}`);
  return res.data;
};

export { getCategory, addCategory, getById, deleteCategory, putCategory }