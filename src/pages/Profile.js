import React from "react";
import "../profile.css";
import { ProfileInfo } from "../components/ProfileInfo";
import { ProfileRecipeList } from "../components/ProfileRecipeList";
// import { useQueryClient } from "@tanstack/react-query";
// import background3 from "../media/background2.jpg";
// import UserRecipeCard from "../components/UserRecipeCard";
// import { Link } from "react-router-dom";
const Profile = () => {
  // const [user, setUser] = useContext(UserContext);
  // const { data: profile } = useQuery({
  //   queryKey: ["profile"],
  //   queryFn: getProfile,
  // });
  return (
    <div className="h-[100%]  flex justify-content relative flex-col  testingthis">
      <ProfileInfo />
      {/* <ProfileRecipeList /> */}
    </div>
  );
};

export default Profile;
