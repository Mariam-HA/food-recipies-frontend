import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import background3 from "../media/background2.jpg";
import UserRecipeCard from "../components/UserRecipeCard";
const Profile = () => {
  //   const queryClient = useQueryClient();
  //   const {
  //     data: user,
  //     isLoading,
  //     error,
  //   } = useQuery({
  //     queryKey: ["user", userId],
  //     queryFn: () => getProfile(),
  //   });
  return (
    <div className="h-full flex justify-content relative flex-col">
      <h1>{User.name}</h1>

      <h3>My Recipes</h3>

      {/* <button
        onclick={addApi}
        className=" "
      >
        Add New Recipe
      </button> */}
      <div
        className="bg-cover rounded-t-3xl bg-center w-full h-80  bg-no-repeat"
        style={{
          backgroundImage: `url(${background3})`,
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="w-full h-[70%] bg-green-300">
        {/* <img src={pet.image} className="w-full h-full object-cover" /> */}
      </div>
      <div className="flex  justify-start h-screen w-96 bg-gray-400">v</div>

      <UserRecipeCard />

      <Link to={`/SignUp`}>
        <button className=" border border-black px-5 py-1 rounded-md hover:bg-[black] hover:text-white">
          Create a new account
        </button>
      </Link>
    </div>
  );
};

export default Profile;
