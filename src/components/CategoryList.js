import { useQuery } from "@tanstack/react-query";
import React from "react";

import { CategoryCard } from "./CategoryCard";
import { getCategory } from "../api/categories";

export const CategoryList = () => {
  // <Navbar />;
  const {
    data: categories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategory(),
  });

  const categoryList = categories?.map((category) => (
    <CategoryCard key={category.id} category={category} />
  ));
  const catLoading = {
    name: "loading ...",
  };
  if (isLoading) {
    return <CategoryCard category={catLoading} />;
  }

  return (
    <div className="flex flex-wrap gap-[30px] justify-center">
      {categoryList}
    </div>
  );
};
