import instance from "./index";

const getProfile = async () => {
  try {
    const { data } = await instance.get(`/profile`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getProfile };
