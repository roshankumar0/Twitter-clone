import React from 'react'
import Header from './Header'
import TweetChat from './TweetChat'
import Post from './Post'

const Feeds = () => {
  return (
    <div  className='flex-[0.4] px-[16px]'>
      <Header/>
      <TweetChat/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}

export default Feeds
