import React, { useContext } from "react";
import "../profile.css";
import { ProfileInfo } from "../components/ProfileInfo";
import { ProfileRecipeList } from "../components/ProfileRecipeList";
// import { useQuery } from "@tanstack/react-query";
import UserContext from "../context/UserContext";
// import background3 from "../media/background2.jpg";
// import UserRecipeCard from "../components/UserRecipeCard";
import { Link, Navigate } from "react-router-dom";
const Profile = () => {
  const [user, setUser] = useContext(UserContext);
  // const { data: profile } = useQuery({
  //   queryKey: ["profile"],
  //   queryFn: getProfile,
  // });
  if (!user) {
    return <Navigate to="/" />;
  }
  return (
    <div className="h-[100%]  flex justify-content relative flex-col  testingthis">
      <ProfileInfo />
    </div>
  );
};

export default Profile;
