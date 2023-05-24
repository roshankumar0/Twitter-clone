import { MdOutlineGifBox, MdSchedule } from 'react-icons/md';
import { BiPoll } from 'react-icons/bi';
import { BsFillEmojiSmileFill } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { TfiGallery } from 'react-icons/tfi';
import { useState, useEffect } from 'react';

const UserPost = ({ twitpost }) => {
  const [userPosts] = useState([
    { Icon: <TfiGallery />, showIconName: "Media" },
    { Icon: <MdOutlineGifBox />, showIconName: "GIF" },
    { Icon: <BiPoll />, showIconName: "Poll" },
    { Icon: <BsFillEmojiSmileFill />, showIconName: "Emoji" },
    { Icon: <MdSchedule />, showIconName: "Schedule" },
    { Icon: <GoLocation />, showIconName: "Location " },
  ]);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (hoveredIndex !== null) {
      timeoutId = setTimeout(() => {
        setShowIcon(true);
      }, 800);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [hoveredIndex]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    setShowIcon(false);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setShowIcon(false);
  };

  return (
    <div className='flex items-center py-[12px] '>
      <ul className='flex flex-1 justify-between'>
        {userPosts.map((post, index) => (
          <div key={index} className='flex flex-col relative'>
            <li
              className='flex relative flex-col cursor-pointer hover:bg-gray-100 transition ease-in-out delay-150 p-[12px] rounded-full text-[#1D9BF0]'
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {post.Icon}

            </li>
            <div>
              {hoveredIndex === index && showIcon && (
                <span className='absolute text-white ml-[-10px] top-11 bg-slate-500 rounded-md text-[14px] p-[4px]'>{post.showIconName}</span>
              )}
            </div>
          </div>
        ))}
      </ul>
      <div className='flex-1 text-end'>
        <span
          className='bg-[#1D9BF0] px-[16px] py-[8px] cursor-pointer rounded-full ml-[12px] opacity-[0.5] text-[15px] font-bold text-white'
          onClick={twitpost}
        >
          Tweets
        </span>
      </div>
    </div>
  );
};

export default UserPost;
