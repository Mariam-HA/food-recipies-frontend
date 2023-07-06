import instance from ".";
import jwt_decode from "jwt-decode";

const signup = async (userInfo) => {
  try {
    const formData = new FormData();
    for (const key in userInfo) formData.append(key, userInfo[key]);

    const { data } = await instance.post("", formData);
    storeToken(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
};
const storeToken = (token) => {
  localStorage.setItem("token", token);
};

const checkToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decode = jwt_decode(token);
    const curentTime = Date.now() / 100;

    if (decode.exp < curentTime) {
      localStorage.removeItem("token");
      return false;
    }
    return true;
  }
  return false;
};
export { signup, storeToken, checkToken };
