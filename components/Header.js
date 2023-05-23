import React from 'react'
import { BsTwitter } from 'react-icons/bs'
const Header = () => {
  return (
    <div className='sticky top-0 bg-white px-[16px] flex flex-col'>
      <div className='md:hidden flex items-center justify-between'>
        <div>logo</div>
        <div><BsTwitter /></div>
        <div></div>
      </div>
      <h2 className='font-bold text-black'>Home</h2>
      <ul className='flex justify-between text-center'>
        <li className='flex-1 font-bold'>For you</li>
        <li className='flex-1 font-bold text-[#536471]'>Following</li>
      </ul>
    </div>
  )
}

export default Header
