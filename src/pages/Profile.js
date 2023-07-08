import React from "react";
import { ProfileInfo } from "../components/ProfileInfo";
import { ProfileRecipeList } from "../components/ProfileRecipeList";
// import { useQueryClient } from "@tanstack/react-query";
// import background3 from "../media/background2.jpg";
// import UserRecipeCard from "../components/UserRecipeCard";
// import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <div className="h-full flex justify-content relative flex-col">
      <ProfileInfo />
      <ProfileRecipeList />
    </div>
  );
};

export default Profile;
