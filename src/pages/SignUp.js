import React, { useContext, useState } from "react";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { signup } from "../api/auth";
import { Navigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import Navbar from "../components/Navbar";

const SignUp = () => {
  <Navbar />;
  const [userInfo, setUserInfo] = useState({});
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [user, setUser] = useContext(UserContext);
  const handleChange = (e) => {
    setError("");
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handlePasswordConfirmation = (e) => {
    setConfirmPassword(e.target.value);
  };

  const { mutate: addRegister } = useMutation({
    mutationFn: () => signup(userInfo),
    onSuccess: () => {
      setUser(true);
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (userInfo.password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    addRegister();
  };

  if (user) {
    return <Navigate to="/signin" />;
  }

  return (
    <div className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
      <div className="text-2xl font-bold pb-8 text-center">Sign Up</div>

      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-medium text-gray-600"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
          id="username"
          name="username"
          type="text"
          required=""
          placeholder="Your Name"
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-medium text-gray-600"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
          id="email"
          name="email"
          type="email"
          required=""
          placeholder="Your Email"
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-medium text-gray-600"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
          id="password"
          name="password"
          type="password"
          required=""
          placeholder="Your Password"
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-medium text-gray-600"
          htmlFor="confirmPassword"
        >
          Confirm Password
        </label>
        <input
          className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          required=""
          placeholder="Confirm Password"
          onChange={handlePasswordConfirmation}
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>

      <div className="mt-4">
        <button
          className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
          type="submit"
          onClick={handleFormSubmit}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;