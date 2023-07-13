import React, { useState } from "react";
import { CategoryList } from "../components/CategoryList";
import SearchBar from "../components/SearchBar";
import Modal from "../components/Modal";

const Categories = () => {
  const [query, setQuery] = useState("");
  const [showModal, setshowModal] = useState("");

  return (
    <div>
      <div className="px-5 py-4 text-[55px] font-extrabold  text-center text-black mb-0 mt-5">
        Categories
      </div>
      <div className="flex justify-center">
        <div className="flex items-center flex-row-reverse gap-6">
          <div>
            <button
              onClick={() => {
                setshowModal(true);
              }}
              type="button"
              className="flex items-end justify-center px-5 py-3 bg-sky-950 text-white rounded-md hover:bg-sugar-white hover:text-sky-950 transition-colors"
            >
              Add New Category
            </button>
          </div>
          <SearchBar setQuery={setQuery} />
        </div>
      </div>

      <CategoryList query={query} />

      <Modal showModal={showModal} setshowModal={setshowModal} />
    </div>
  );
};

export default Categories;
