import { useQuery } from "@tanstack/react-query"
import React, { useState } from 'react'
import Navbar from './Navbar';
import { CategoryCard } from "./CategoryCard";
import { getCategory } from "../api/categoriess";
import SearchBar from "./SearchBar";

<<<<<<< HEAD
export const CategoryList = () => {
=======



export const CategoryList = ({ query }) => {
  // <Navbar />;
>>>>>>> origin/main
  const {
    data: categories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategory(),
<<<<<<< HEAD
  });

  const categoryList = categories?.map((category) => (
    <CategoryCard key={category.id} category={category} />
  ));

=======

  })





  const categoryList = categories?.filter(category => {
    console.log(category)
    return category.name.toLowerCase().includes(query.toLowerCase())
  })?.map((category) => <CategoryCard key={category.id} category={category} />)
>>>>>>> origin/main
  const catLoading = {
    name: "loading ...",

  }
  if (isLoading) {
    return (
      <div className="flex flex-wrap gap-[30px] justify-center">
        <CategoryCard category={catLoading} />
        <CategoryCard category={catLoading} />
        <CategoryCard category={catLoading} />
      </div>
    )
  }
  if (error) {
    return <p>An error occurred:{error.message}</p>;
  }

  return (
    <div>

      <div className="flex flex-wrap gap-[30px] justify-center">{categoryList}</div>
    </div>
  )
}
export default CategoryList
