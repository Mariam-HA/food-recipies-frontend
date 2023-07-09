import React, { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { signup } from "../api/auth";
import { Navigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import backgroundsignup from "../media/signup.jpg";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({});
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [user, setUser] = useContext(UserContext);

  const handleChange = (e) => {
    if (e.target.files) {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };
  //setError("");

  const handlePasswordConfirmation = (e) => {
    setConfirmPassword(e.target.value);
  };

  const { mutate: addRegister, error: error2 } = useMutation({
    mutationFn: () => signup(userInfo),
    onSuccess: () => {
      setUser(true);
    },
  });
  //refreshHandler() {  window.location.reload(false);   }
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
    <div
      className="flex flex-col items-center justify-center min-h-screen text-white px-4"
      style={{
        background: `url(${backgroundsignup})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <div className="text-2xl font-bold pb-8 text-center text-black">
          Sign Up
        </div>

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
          {error2 && (
            <p className="text-red-500 text-xs mt-1">
              {error2?.response?.data.error.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="userImage"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Profile Image
          </label>
          <input
            type="file"
            id="userImage"
            name="userImage"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          />
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
    </div>
  );
};

export default SignUp;
