import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../api/auth";
import UserContext from "../context/UserContext";

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <div>
      <div>
        <div className="flex justify-evenly items-center bg-red-600 text-black h-16">
          <NavLink to="/">Home</NavLink>
          {user ? (
            <>
              <NavLink to="/">profile</NavLink>
              <button
                onClick={() => {
                  logout();
                  setUser(false);
                }}
                className=""
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/signin" className="">
                SignIn
              </NavLink>
              <NavLink to="/signup" className="">
                SignUp
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
