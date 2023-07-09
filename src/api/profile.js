import instance from "./index";

const getProfile = async (profile) => {
  const res = await instance.get(`/users/profile`);
  return res.data;
};

export { getProfile };
