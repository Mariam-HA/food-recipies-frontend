import instance from "./index";
import jwt_decode from "jwt-decode";

const signin = async (userInfo) => {
  try {

    // const formData = new FormData();
    // for (const key in userInfo) formData.append(key, userInfo[key]);

    const { data } = await instance.post("/users/signup", userInfo);
    storeToken(data.token);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

const signup = async (userInfo) => {
  const formData = new FormData();
  for (const key in userInfo) formData.append(key, userInfo[key]);

  const { data } = await instance.post("/users/signup", formData);
  storeToken(data.token);
  return data;
};

const storeToken = (token) => {
  localStorage.setItem("token", token);
};

const checkToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decode = jwt_decode(token);
    const curentTime = Date.now() / 1000;

    if (decode.exp < curentTime) {
      localStorage.removeItem("token");
      return false;
    }
    return true;
  }
  return false;
};

const logout = () => {
  localStorage.removeItem("token");
};
export { signup, storeToken, checkToken, logout, signin };
