import React from 'react'
import LiveTrending from './LiveTrending'

const Trending = () => {
  return (
    <div className=' bg-[#EFF3F4] rounded-lg mt-[60px] '>
      <h1 className='py-[12px] px-[16px] text-[#0F1419] text-[20px] font-[700]'>What’s happening</h1>
      <div className=' rounded-lg'>
        <LiveTrending />
      </div>
    </div>
  )
}

export default Trending
