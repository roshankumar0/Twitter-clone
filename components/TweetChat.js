import React, { useState } from 'react';
import UserPost from './UserPost';

const TweetChat = () => {
  const [tweetText, setTweetText] = useState("");
  const [tweets, setTweets] = useState([]);

  const twitpost = () => {
    setTweets(prevTweets => [tweetText, ...prevTweets]);
    setTweetText(""); // Clear the tweet text after posting
  };

  return (
    <div className='px-[16px] flex'>
      <img className='mr-[12px] h-[50px] w-[50px] rounded-full cursor-pointer' src="https://tse1.mm.bing.net/th?id=OIP.KIhARS50yd9x1WgCVoouogHaET&pid=Api&P=0&h=180" alt="" />
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
