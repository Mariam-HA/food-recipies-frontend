import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import { logout } from "../api/auth";
import UserContext from "../context/UserContext";
import logo from "../media/logo.png";

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);

  return (
    <div className="border-gray-300 h-12 px-4 flex justify-between items-center">
      <div className="flex items-center space-x-4 text-black">
        <Link to="/">
          <img className="h-10 w-10" src={logo} alt="logoImage" />
        </Link>
        <NavLink to="/">Home</NavLink>
      </div>
      {user ? (
        <div className="flex flex-center items-center space-x-4 text-black">
          <NavLink to="/profile">My Profile</NavLink>
          <button
            onClick={() => {
              logout();
              setUser(false);
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
