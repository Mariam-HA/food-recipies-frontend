import instance from "./index";

const getProfile = async (id) => {
  const res = await instance.get(`/users/${id}`);
  return res.data;
};

export { getProfile };
