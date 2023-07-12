import React from "react";
import CreateCategory from "../pages/CreateCategory";

const Modal = ({ showModal, setshowModal }) => {
  if (!showModal) return "";

  return (
    <div className="fixed inset-0 w-[100vw] h-[100vh] justify-center flex items-center  ">
      <div
        className="bg-black  opacity-70 absolute inset-0 "
        onClick={() => {
          setshowModal(false);
        }}
      ></div>

      <div className="bg-white  absolute w-[500px] h-[400px] rounded-xl z-[20]">
        <button
          onClick={() => {
            setshowModal(false);
          }}
          className="border-red-500 border p-1 text-red-500 rounded-3xl absolute top-0 right-0"
        >
          X
        </button>
        <CreateCategory setshowModal={setshowModal} />
      </div>
    </div>

    // <div className="fixed inset-0 w-[100vw] h-[100vh] flex justify-center items-center bg-gray-800 bg-opacity-50">
    //   <div className="w-[400px] h-[450px] bg-white rounded-md shadow-lg p-4">
    //     <button
    //       onClick={() => {
    //         setshowModal(false);
    //       }}
    //       className="border-red-500 border p-1 text-red-500 rounded-3xl absolute top-0 right-0"
    //     >
    //       close
    //     </button>
    //     <CreateCategory setshowModal={setshowModal} />
    //   </div>
    // </div>
  );
};

export default Modal;
