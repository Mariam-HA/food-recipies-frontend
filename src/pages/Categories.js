import React, { useState } from "react";
import { CategoryList } from "../components/CategoryList";
import SearchBar from "../components/SearchBar";
import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../api/categoriess";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";

const Categories = () => {
  const [query, setQuery] = useState("");
  const [showModal, setshowModal] = useState("");

  return (
    <div>
      <div className="px-5 py-4 text-[30px] font-bold text-center text-black mb-0 mt-5">
        Categories
      </div>

      <div className="">
        <SearchBar setQuery={setQuery} />
      </div>

      <CategoryList query={query} />

      <button
        onClick={() => {
          setshowModal(true);
        }}
        type="button"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        New Category
      </button>

      <Modal showModal={showModal} setshowModal={setshowModal} />
    </div>
  );
};

export default Categories;
