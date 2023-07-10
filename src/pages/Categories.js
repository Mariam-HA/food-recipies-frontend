import React, { useState } from "react";
import { CategoryList } from "../components/CategoryList";
import SearchBar from "../components/SearchBar";
import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../api/categoriess";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";

const Categories = () => {


  const [query, setQuery] = useState("");
  const [showModal, setshowModal] = useState("")


  return <div>
    Categories


    <SearchBar setQuery={setQuery} />

    <CategoryList query={query} />

    <button onClick={() => { setshowModal(true) }}
      type="button"
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
    >
      New Category
    </button>


    <Modal showModal={showModal} setshowModal={setshowModal} />
  </div>;
};

export default Categories;
