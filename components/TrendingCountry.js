import React from 'react'
import Image from 'next/image';


const TrendingCountry = (props) => {
  const { gameName, channel, time, imgUlr } = props
  return (
    <div className='flex py-[12px] px-[16px] hover:bg-gray-200'>
      <div className='flex flex-col flex-1'>
        <div className='flex'>
          <div>{channel}</div>
          <div>{time}</div>
        </div>
        <div>{gameName}</div>
      </div>
      <div className='h-[68px] w-[68px]'>
        <Image  width={68}
        height={68}
        loading="lazy" src={`${imgUlr}`} alt="" className='rounded-lg' />
      </div>
    </div>
  )
}

export default TrendingCountry
