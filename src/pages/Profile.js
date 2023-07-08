import React from "react";
import { ProfileRecipeList } from "../components/ProfileRecipeList";
import { ProfileInfo } from "../components/ProfileInfo";
const Profile = () => {
  return (
    <div className="h-full w-full	bg-gray-600 flex justify-content items-center flex-col absolute">
      <ProfileInfo />
      <ProfileRecipeList />
    </div>
  );
};

export default Profile;
