import React, { useRef, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import Trending from './Trending';

const Search = () => {
  

  return (
    <div className='hidden md:block top-0 fixed w-[350px] bg-white'>
      <div className='rounded-full bg-[#EFF3F4]  my-[12px] '>
        <div className='flex z-[99] items-center h-[53px] text-color font-light p-[12px]'>
          <BsSearch />
          <input type='text' placeholder='Search Twitter' className='  flex-1 bg-transparent outline-none p-[12px]' />
        </div>
      </div>
    </div>
  );
};

export default Search;
