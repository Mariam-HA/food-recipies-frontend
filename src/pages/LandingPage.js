import React from "react";
import { Link } from "react-router-dom";
import background from "../media/background4.jpg";

const LandingPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-white px-4"
      style={{
        background: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="">
        <h1 className="mb-2 text-4xl font-bold text-black text-center">
          Cook at Home Like a Professional Chef
        </h1>
        <p className="mb-5 text-lg text-black font-bold text-center">
          Get a million of beautiful and delicious recipes around the world
        </p>
      </div>
      <Link to="/signup" className="mb-2 w-64">
        <button className="w-full py-2 text-slate-500 bg-slate-100 rounded shadow hover:bg-slate-300">
          Sign Up
        </button>
      </Link>

      <Link to="/signin" className="mb-2 w-64">
        <button className="w-full py-2 text-slate-500 bg-slate-100 rounded shadow hover:bg-slate-300">
          Sign In
        </button>
      </Link>

      <Link to="/home" className="w-64">
        <button className="w-full py-2 text-slate-500 bg-slate-100 rounded shadow hover:bg-slate-300">
          Continue as Guest
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;
