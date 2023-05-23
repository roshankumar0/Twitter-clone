import React, { useState } from 'react';
import { MdOutlineGifBox, MdSchedule } from 'react-icons/md';
import { BiPoll } from 'react-icons/bi';
import { BsFillEmojiSmileFill } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { TfiGallery } from 'react-icons/tfi';

const UserPost = () => {
  const [userPosts] = useState([
    { Icon: <TfiGallery /> },
    { Icon: <MdOutlineGifBox /> },
    { Icon: <BiPoll /> },
    { Icon: <BsFillEmojiSmileFill /> },
    { Icon: <MdSchedule /> },
    { Icon: <GoLocation /> },
    
  ]);

  return (
    <div className=' flex items-center p-[12px] mt-[12px]'>
      <ul className='flex flex-1 justify-between'>
        {userPosts.map((post, index) => (
          <li className='cursor-pointer hover:bg-gray-100 transition ease-in-out delay-150  hover:-translate-y-8 hover:scale-110  duration-300 p-[12px] rounded-full text-[#1D9BF0]' key={index}>{post.Icon}</li>
        ))}
      </ul>
      <div className='flex-1 text-end '><span className='bg-[#1D9BF0] px-[16px] py-[8px] cursor-pointer rounded-full ml-[12px] opacity-[0.5] text-[15px] font-bold text-white'>Tweets</span></div>
    </div>
  );
};

export default UserPost;
