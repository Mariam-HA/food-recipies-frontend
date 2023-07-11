import React, { useContext } from "react";
import "../profile.css";
// import { ProfileInfo } from "../components/ProfileInfo";

import UserContext from "../context/UserContext";

import { Navigate } from "react-router-dom";
const Profile = () => {
  const [user, setUser] = useContext(UserContext);

  if (!user) {
    return <Navigate to="/" />;
  }
  return (
    <div className="h-[100%]  flex justify-content relative flex-col  testingthis">
      {/* <ProfileInfo /> */}
    </div>
  );
};

export default Profile;
