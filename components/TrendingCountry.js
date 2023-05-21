import React from 'react'

const TrendingCountry = (props) => {
  const { gameName, channel, time, imgUlr } = props
  return (
    <div className='flex py-[12px] px-[16px]'>
      <div className='flex flex-col flex-1'>
        <div className='flex'>
          <div>{channel}</div>
          <div>{time}</div>
        </div>
        <div>{gameName}</div>
      </div>
      <div className='h-[68px] w-[68px]'>
      <img src={`${imgUlr}`} alt="" className='w-[100%] rounded-lg' />
      </div>
    </div>
  )
}

export default TrendingCountry
