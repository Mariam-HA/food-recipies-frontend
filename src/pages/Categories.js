import React, { useState } from "react";
import { CategoryList } from "../components/CategoryList";
import SearchBar from "../components/SearchBar";
import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../api/categoriess";
import { Link } from "react-router-dom";

const Categories = () => {


  const [query, setQuery] = useState("");


  return <div>
    Categories

    <SearchBar setQuery={setQuery} />
    <CategoryList query={query} />
    <Link to="/createCat">
      <button
        type="button"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        New Category
      </button>
    </Link>

  </div>;
};

export default Categories;
