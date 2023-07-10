import React from "react";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import background3 from "../../media/background2.jpg";
import profileimage from "../../media/person5.png";
import { getProfile } from "../../api/profile";
import { PROFILE_KEY } from "../../queryKeys/queryKeys";

export const ProfileInfo = () => {
  const queryClient = useQueryClient();
  const {
    data: profile,
    isLoading,
    error,
  } = useQuery({
    queryKey: [PROFILE_KEY],
    queryFn: () => getProfile(),
  });

  return (
    <div className="w-full h-full flex justify-content items-center flex-col ">
      <div className="w-full h-full p-0 m-0 flex flex-col justify-start items-center">
        <div className="w-[85%] h-full min-h-[300px]">
          <div
            className=" bg-cover rounded-t-3xl bg-center w-full h-[300px]  bg-no-repeat  "
            style={{
              backgroundImage: `url(${background3})`,
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <div className="flex w-full min-h-[400px] ">
            <div className="flex  justify-center min-h-full w-[30%] bg-gray-300 relative ">
              v
              {/* <img src={pet.image} className="w-full h-full object-cover" /> */}
              <img
                className="h-72 w-72 rounded-full absolute top-[-144px] "
                absolute
                bottom-
                left-0
                src={profileimage}
                alt="logoImage"
              />
            </div>
            <div className="w-[70%] min-h-full bg-white">dasds ad sad as</div>
          </div>
        </div>
      </div>
    </div>
  );
};
