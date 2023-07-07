import React from 'react'
// import { Link } from 'react-router-dom'

export const CategoryCard = ({ category }) => {
    return (
        // <div>CategoryCard</div>
        <div className="w-[300px] h-[400px]  border border-black rounded-md flex flex-col justify-between items-center p-4">
            <h1 className="text-md font-bold">{category.name}</h1>
            <img
                src={category.image}
                alt={`${category.name}-image`}
                className="w-[200px] rounded-md
      "
            />
            {/* <Link to={`/api/category/${category.id}`}>
                <button className=" border border-black px-5 py-1 rounded-md hover:bg-[black] hover:text-white">
                    
                </button>
            </Link> */}
        </div>
    )
}
