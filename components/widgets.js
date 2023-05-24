import React from 'react'
import { BsSearch } from 'react-icons/bs'
import Search from './search'
import Trending from './Trending'
const Widgets = () => {
  return (
   <div className='w-[350px] bg-red-400'>
    <Search/>
    <Trending/>
   </div>
  )
}

export default Widgets
