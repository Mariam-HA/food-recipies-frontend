import { useQuery } from "@tanstack/react-query"
import React, { useState } from 'react'
import Navbar from './Navbar';
import { CategoryCard } from "./CategoryCard";
import { getCategory } from "../api/categoriess";
import SearchBar from "./SearchBar";




export const CategoryList = ({ query }) => {
  // <Navbar />;
  const {
    data: categories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategory(),

  })





  const categoryList = categories?.filter(category => {
    console.log(category)
    return category.name.toLowerCase().includes(query.toLowerCase())
  })?.map((category) => <CategoryCard key={category.id} category={category} />)
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

  return (
    <div>

      <div className="flex flex-wrap gap-[30px] justify-center">{categoryList}</div>
    </div>
  )
}
export default CategoryList
