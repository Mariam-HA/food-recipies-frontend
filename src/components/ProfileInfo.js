import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import background3 from "../media/background2.jpg";
import profileimage from "../media/person5.png";
export const ProfileInfo = () => {
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
    <div className="w-full flex justify-content items-center flex-col absolute">
      <div className="w-full p-0 m-0">
        <div
          className="w-4/5 bg-cover rounded-t-3xl bg-center w-full h-80  bg-no-repeat absolute "
          style={{
            backgroundImage: `url(${background3})`,
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="flex  justify-start h-screen w-96 bg-gray-300 bottom-42">
          v
        </div>
        {/* <img src={pet.image} className="w-full h-full object-cover" /> */}
        <img
          className="h-72 w-72 rounded-full relative bottom-96 left-12"
          absolute
          bottom-
          left-0
          src={profileimage}
          alt="logoImage"
        />
      </div>
    </div>
  );
};
