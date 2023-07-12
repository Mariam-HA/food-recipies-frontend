import React from "react";
import CreateCategory from "../pages/CreateCategory";

const Modal = ({ showModal, setshowModal }) => {
  if (!showModal) return "";

  return (
    <div className="fixed inset-0 w-[100vw] h-[100vh] flex justify-center items-center bg-gray-800 bg-opacity-50">
      <div className="w-[400px] h-[450px] bg-white rounded-md shadow-lg p-4">
        <button
          onClick={() => {
            setshowModal(false);
          }}
          className="absolute top-3 right-3 bg-red-500 text-white hover:bg-red-600 p-2 rounded-full transition-colors"
        >
          X
        </button>
        <CreateCategory setshowModal={setshowModal} />
      </div>
    </div>
  );
};

export default Modal;
