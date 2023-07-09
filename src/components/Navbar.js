import React, { useContext } from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";

import { logout } from "../api/auth";
import UserContext from "../context/UserContext";
import logo from "../media/logo.png";

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div className="border-gray-300 h-12 px-4 flex justify-between items-center">
      <div className="flex items-center space-x-4 text-black">
        <Link to="/">
          <img className="h-10 w-10" src={logo} alt="logoImage" />
        </Link>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/categories" activeClassName="active-link">
          Categories
        </NavLink>
      </div>
      <h1 className="font-bold">Yummly</h1>
      {user ? (
        <div className="flex flex-center items-center space-x-4 text-black">
          <NavLink to="/profile">Profile</NavLink>

          <button
            onClick={() => {
              logout();
              setUser("");
              navigate("/");
            }}
            className="m-4"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex space-x-4 text-black">
          <NavLink to="/signin">SignIn</NavLink>
          <NavLink to="/signup">SignUp</NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
