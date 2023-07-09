import { useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react'


export const SearchBar = ({ setQuery }) => {





  return (
    <div>
      <div>SearchBar</div>
      <div className="flex flex-wrap gap-[30px] justify-center">
        <input placeholder="Search for a Category" onChange={(e) => { setQuery(e.target.value) }} />
      </div>


    </div>
  )
}
export default SearchBar;
