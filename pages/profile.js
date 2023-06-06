import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BsCalendar2Week } from 'react-icons/bs';
import Tweet from '../components/tweets';
import Like from '../components/Likes';
import Replie from '../components/replies';
import Medias from '../components/media';
import Editprofile from '../components/Editprofile';
import { useSelector } from 'react-redux';
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

    } else {

    }
  }, [showprofile]);
  const { name, username,userProfile } = useSelector((state) => state.names)
  return (
    <div className='block h-[100vh]'>
      <div className='md:flex flex-1 '>
        <div className='md:flex-[0.6] flex-1 border-r-[1px]'>
          <div className='bg-white  top-0 z-40 sticky'>
            <div className='flex  items-center max-w-[600px] h-[53px] px-[16px]'>
              <div className='min-w-[56px] font-bold'>
                <Link href={`/`}>
                  <AiOutlineArrowLeft />
                </Link>
              </div>
              <div className='flex flex-col'>
                <span className='cursor-pointer text-[#0F1419] font-bold text-[20px] lineh leading-[24px]'>{name}</span>
                <span className='text-[13px] text-[#536471]'>0 Tweets</span>
              </div>
            </div>
          </div>
          <div className='flex flex-col relative'>
            <div className='userProfile__header h-[400px] relative '>
              <img src={userProfile} alt="" className='rounded-full object-cover w-[133px] h-[133px] absolute bottom-0 left-0 translate-x-1/2 translate-y-1/2' />
            </div>
            <div className='mb-[16px] pt-[12px] px-[16px]'>
              <div className='flex justify-end'>
                <div className='relative right-0 border w-[25%] rounded-full mt-[12px] text-center font-bold cursor-pointer hover:bg-gray-200 p-[12px]' onClick={() => setShowprofile(!showprofile)}
                >Edit profile  </div>
              </div>
              <div className='flex flex-col z-20'>
                <div>{name}</div>
                <div>@{username}</div>
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
                <div className='hover:bg-gray-200 flex-1 relative text-center'>
                  <li
                    key={index}
                    className={` flex flex-col  text-sm font-medium text-slate-700}`}
                    onClick={() => handleItemClick(index)}
                  >
                    {users.userInfo}
                    {active === index && <span className="absolute bottom-0 left-0 w-[100%] h-[4px] bg-[#1D9BF0]"></span>}
                  </li>
                </div>
              ))}
            </ul>
            <div className="mt-4">
              <ActiveComponent />
            </div>
            {showprofile && <Editprofile />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
