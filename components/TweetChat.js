import React, { useState } from 'react';
import UserPost from './UserPost';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import profile from '../pages/profile';
const TweetChat = () => {
  const [tweetText, setTweetText] = useState("");
  const [tweets, setTweets] = useState([]);

  const twitpost = () => {
    setTweets(prevTweets => [tweetText, ...prevTweets]);
    setTweetText(""); // Clear the tweet text after posting
  };

  const { userProfile } = useSelector((state) => state.names);
  return (
    <div className='px-[16px] flex'>
      <Link href={`/profile`}>
      <img className='mr-[12px] h-[50px] w-[50px] rounded-full cursor-pointer' src={`${userProfile}`} alt="" />
      </Link>
      <div className='flex flex-col flex-1'>
        <div className='flex flex-col'>
          <input type='text' className='flex-1 outline-none py-[12px]  text-[18px] text-[#536471]  p-[12px]' placeholder='What is happening?!' value={tweetText} onChange={(e) => setTweetText(e.target.value)} />
          <UserPost twitpost={twitpost} />
        </div>
      </div>
      {tweets.map((post, index) => (
        <div key={index}>{post}</div>
      ))}
    </div>
  );
};

export default TweetChat;
