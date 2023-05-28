import React, { useRef, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import Trending from './Trending';

const Search = () => {
  

  return (
    <div className='hidden md:block top-0 sticky bg-white '>
      <div className='rounded-full bg-gray-200 '>
        <div className='flex z-[99] items-center h-[56px] text-color font-light px-[20px]'>
          <BsSearch />
          <input type='text' placeholder='Search Twitter' className=' bg-transparent outline-none p-[12px]' />
        </div>
      </div>
    </div>
  );
};

export default Search;
