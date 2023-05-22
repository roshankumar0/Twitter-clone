import React from 'react'

const Header = () => {
  return (
    <div className='sticky top-0 bg-white px-[16px] flex flex-col'>
      <h2 className='font-bold text-black'>Home</h2>
      <ul className='flex justify-between text-center'>
        <li className='flex-1 font-bold'>For you</li>
        <li className='flex-1 font-bold text-[#536471]'>Following</li>
      </ul>
    </div>
  )
}

export default Header
