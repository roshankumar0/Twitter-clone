import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BsCalendar2Week } from 'react-icons/bs';
import Tweet from '../components/tweets';
import Like from '../components/Likes';
import Replie from '../components/replies';
import Medias from '../components/media';
import Search from '../components/search';
import Editprofile from '../components/Editprofile';
const Tweets = () => {
  return <Tweet />
};

const Replies = () => {
  return <Replie />
};

const Media = () => {
  return <Medias />
};

const Likes = () => {
  return <Like />
};

const Profile = () => {
  const [userTweet] = useState([
    { userInfo: "Tweets", component: Tweets },
    { userInfo: "Replies", component: Replies },
    { userInfo: "Media", component: Media },
    { userInfo: "Likes", component: Likes },
  ]);
  const [showprofile, setShowprofile] = useState(false)
  const [active, setActive] = useState(0);

  const handleItemClick = (index) => {
    setActive(index);
  };

  const ActiveComponent = userTweet[active].component;
  useEffect(() => {
    if (!showprofile) {
      document.body.style.background = 'gray';
    } else {
      document.body.style.background = ''; // Reset the background color if cross is false
    }
  }, [showprofile]);
  return (
    <div className='block overflow-y-scroll h-[100vh] '>
      <div className='md:flex flex-1 '>
        <div className='md:flex-[0.6] flex-1 border-r-[1px]'>
          <div className='flex sticky top-0 z-40 bg-white'>
            <div>
              <AiOutlineArrowLeft />
            </div>
            <div className='flex flex-col'>
              <span>ROSHAN</span>
              <span>0 Tweets</span>
            </div>
          </div>
          <div className='flex flex-col relative'>
            <div className='userProfile__header h-[400px] relative '>
              <img src="https://tse4.mm.bing.net/th?id=OIP.2ipyciZc3yjfiBePI2p0QAHaF6&pid=Api&P=0&h=180" alt="" className='rounded-full w-[133px] h-[133px] absolute bottom-0 left-0 translate-x-1/2 translate-y-1/2' />
            </div>
            <div className='mb-[16px] pt-[12px] px-[16px]'>
              <div className='flex justify-end'>
                <div className='relative right-0 border w-[25%] rounded-full mt-[12px] text-center font-bold cursor-pointer hover:bg-gray-200 p-[12px]' onClick={() => setShowprofile(!showprofile)}
                >Edit profile  </div>
              </div>
              <div className='flex flex-col z-20'>
                <div>ROSHAN</div>
                <div>@ROSHNN01</div>
              </div>
              <div className='flex items-center'>
                <BsCalendar2Week />
                <span> Joined April 2022</span>
              </div>
              <div className='flex'>
                <span> 1 Following</span>
                <span> 0 Followers</span>
              </div>
            </div>
            <ul className='flex justify-around tweetList'>
              {userTweet.map((users, index) => (
                <li
                  key={index}
                  className={`hover:bg-gray-200 flex-1 text-center relative text-sm font-medium text-slate-700 ${active === index ? '' : ''
                    }`}
                  onClick={() => handleItemClick(index)}
                >
                  {users.userInfo}
                  {active === index && <span className="absolute bottom-0 left-0 w-[100%] h-[4px] bg-[#1D9BF0]"></span>}
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <ActiveComponent />
            </div>
            {showprofile && <Editprofile />}
          </div>
        </div>
        <div className='flex-[0.4]'>
          <Search />
        </div>
      </div>

    </div>
  );
};

export default Profile;
