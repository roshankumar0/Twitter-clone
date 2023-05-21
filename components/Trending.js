import React from 'react'
import LiveTrending from './LiveTrending'

const Trending = () => {
  return (
    <div className='sticky top-[0px] z-[-110]'>
      <h1>What’s happening</h1>
      <div className=' rounded-lg'>
        <LiveTrending />
      </div>
    </div>
  )
}

export default Trending
