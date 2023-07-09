import { useMutation } from '@tanstack/react-query'
import React, { useState } from 'react'
import { addCategory } from '../api/categoriess'

const CreateCategory = () => {
    const [category, setCategory] = useState({})
    const { mutate: addCategoryFun } = useMutation({
        mutationFn: () => addCategory(category)
    })
    console.log(category)
    const handleChange = (e) => {
        if (e.target.files) {
            setCategory({ ...category, [e.target.name]: e.target.files[0] })
        } else {
            setCategory({ ...category, [e.target.name]: e.target.value })
        }
    }


    const handleSubmit = () => {
        addCategoryFun()
    }

    return (
        <div>

            <div>CreateCategory</div>
            <input
                className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
                name="name"
                onChange={handleChange}
            />
            <input
                className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
                name="catImage"
                type='file'
                onChange={handleChange}
            />

            <button onClick={() => { handleSubmit() }}>Create</button>
            {/* <div className="w-[300px] h-[200px]  border border-black rounded-md flex flex-col justify-between items-center p-4">
                <h1 className="text-md font-bold">{category.name}</h1>
                <img
                    src={category.image}
                    alt={`${category.name}-image`}
                    className="w-[200px] rounded-md
                "
                />
            </div> */}
        </div>
    )
}

export default CreateCategory