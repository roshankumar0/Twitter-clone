import React from 'react'
import { BsSearch } from 'react-icons/bs'
import Trending from './Trending'
const Widgets = () => {
  return (
    <div className='w-[350px] '>
       <div className=' sticky top-0 z-[122] rounded-full search_bg '>
          <div className='flex z-[99] items-center  h-[56px] text-color font-light px-[20px]  '>
            <BsSearch />
            <input type='text' placeholder='Search Twitter' className='flex-1 z-[122] bg-transparent  outline-none p-[12px]' />
          </div>
        </div>
      <div>
       <Trending/>
      </div>
    </div>
  )
}

export default Widgets
