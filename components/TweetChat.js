import React, { useState } from 'react';
import UserPost from './UserPost';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { Tweet } from '../store/cartSlice';

const TweetChat = () => {
  const [tweetText, setTweetText] = useState("");

  const dispatch = useDispatch();

  const { userProfile } = useSelector((state) => state.names);

  const handleTweet = () => {
    dispatch(Tweet(tweetText));
    setTweetText(""); // Clear the tweet text after posting
  };

  return (
    <div className='px-[16px] md:flex hidden mt-[140px]'>
      <Link href={`/profile`}>
        <img className='mr-[12px] h-[50px] object-cover w-[50px] rounded-full cursor-pointer' src={`${userProfile}`} alt="" />
      </Link>
      <div className='flex flex-col flex-1'>
        <div className='flex flex-col'>
          <input type='text' className='flex-1 outline-none py-[12px] placeholder-[#536471] text-[18px]  p-[12px]' placeholder='What is happening?!' value={tweetText} onChange={(e) => setTweetText(e.target.value)} />
          <UserPost />
        </div>
      </div>
     <div  className='flex-1 text-end'>
     <button  onClick={handleTweet} className='bg-[#1D9BF0] px-[16px] py-[8px] cursor-pointer rounded-full ml-[12px] opacity-[0.5] text-[15px] font-bold text-white'>
        Tweets
      </button>
     </div>
    </div>
  );
};

export default TweetChat;
