import React from 'react'
import Image from 'next/image';


const Tweets = () => {
  return (
    <div>
      <h1 className='py-[12px] px-[16px]'>Who to follow</h1>
      <div className='py-[12px] px-[16px]'>
        <div className='flex justify-between items-center'>
          <div className='flex'>
            <Image width={48}
              height={48}
              loading="lazy" src="https://wallpapercave.com/wp/wp3146794.jpg" alt="" className='rounded-md' />
            <div className='flex flex-col'>
              <span>Hostinger</span>
              <span>@Hostinger</span>
            </div>
          </div>
          <div className='bg-[#0F1419] text-white rounded-full px-[16px]'><span className='text-[14px] min-h-[32px] items-center cursor-pointer flex'>Follow</span></div>
        </div>
        <div>You have a mission. We have a rocket. Let’s launch your website online 🚀 </div>
      </div>
    </div>
  )
}

export default Tweets
