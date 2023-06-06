import { MdOutlineGifBox, MdSchedule } from 'react-icons/md';
import { BiPoll } from 'react-icons/bi';
import { BsFillEmojiSmileFill } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { TfiGallery } from 'react-icons/tfi';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Tweet } from '../store/cartSlice';

const UserPost = () => {
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

  const dispatch = useDispatch();

  return (
    <>
      <div className='flex items-center'>
        <ul className='flex flex-1 justify-between mt-3'>
          {userPosts.map((post, index) => (
            <div key={index} className='flex flex-col relative' onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
              <li className='flex relative flex-col cursor-pointer hover:bg-gray-100 transition ease-in-out delay-150 p-[12px] rounded-full text-[#1D9BF0]'>
                {post.Icon}
              </li>
              <div>
                {hoveredIndex === index && showIcon && (
                  <span className='absolute text-white top-12 bg-slate-500 rounded-md text-[14px] p-[4px]'>{post.showIconName}</span>
                )}
              </div>
            </div>
          ))}
        </ul>
      </div>
         </>
  );
};

export default UserPost;

