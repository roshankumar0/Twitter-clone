
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Tweet } from '../store/cartSlice';
import {Media,GIF,Poll,Schedule,Location,Emoji} from '../components/icons'
const UserPost = () => {
  const [userPosts] = useState([
    { Icon: <Media />, showIconName: "Media" },
    { Icon: <GIF />, showIconName: "GIF" },
    { Icon: <Poll />, showIconName: "Poll" },
    { Icon: <Emoji />, showIconName: "Emoji" },
    { Icon: <Schedule />, showIconName: "Schedule" },
    { Icon: <Location />, showIconName: "Location " },
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
        <div className='flex flex-1 justify-between mt-3'>
          {userPosts.map((post, index) => (
            <div key={index} className='flex flex-col min-h-[36px] min-w-[36px] justify-center cursor-pointer hover:bg-gray-100 transition ease-in-out delay-150 rounded-full relative' onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
              <div className=' '>
              <span style={{ height:"20px",width:"20px",color:"red",fill:"#1D9BF0"}} className='flex  ml-[8px] relative flex-col '>
                {post.Icon}
              </span>
              </div>
              <div>
                {hoveredIndex === index && showIcon && (
                  <span className='absolute text-white top-12 bg-slate-500 rounded-md text-[14px] p-[4px]'>{post.showIconName}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
         </>
  );
};

export default UserPost;

