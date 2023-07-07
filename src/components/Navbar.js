import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../api/auth";
import UserContext from "../context/UserContext";
import logo from "../media/logo.png";

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);

  return (
    <div>
      <div>
        <div className="flex justify-content items-center bg-gray-800 text-white h-16">
          <span className="font-semibold text-xl text-white">
            <img className="h-20 w-20" src={logo} alt="Image" />
          </span>
          <NavLink to="/">Home</NavLink>
          {user ? (
            <div className="m-4">
              <NavLink to="/">profile</NavLink>
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
            <div className="m-4">
              <NavLink to="/signin" className="">
                SignIn
              </NavLink>
              <NavLink to="/signup" className="">
                SignUp
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
