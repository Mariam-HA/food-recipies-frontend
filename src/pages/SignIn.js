import React, { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { signin } from "../api/auth";

const SignIn = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);
  const [error, setError] = useState("");
  const { mutate: loginFun, error: error2 } = useMutation({
    mutationFn: () => signin(userInfo),
    onSuccess: () => setUser(true),
    onError: (error) => {
      console.log(error.message);
    },
  });

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // if (!validateEmail(userInfo.email)) {
    //   console.log("invalid email!");
    // } else if (!validatePassword(userInfo.password)) {
    //   console.log("Invalid password");
    // } else {
    loginFun();
    // }
  };
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validatePassword = (password) => {
    return password.length >= 4;
  };
  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
      <div className="max-w-md w-full px-6 py-8 bg-gray-500 rounded-md shadow-md">
        <h2 className="text-2xl font-bold pb-8 text-center text-gray-100">
          Sign in
        </h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-100"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
              required
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-100"
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              onChange={handleChange}
              className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
              required
              placeholder="Your Password"
            />
          </div>
          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
          {error2 && (
            <p className="text-red-500 text-xs mt-1">
              {error2?.response?.data.error.message}
            </p>
          )}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 text-gray-700 bg-gray-200  rounded-md hover:text-red-500 transition-colors"
            >
              Signin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
