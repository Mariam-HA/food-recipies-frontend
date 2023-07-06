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

export { signup };
