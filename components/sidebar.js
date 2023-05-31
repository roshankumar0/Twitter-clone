import React, { useState, useRef, useEffect } from 'react';
import { BsTwitter } from 'react-icons/bs';
import { BiHomeCircle, BiHash, BiMessageRounded, BiBookmark, BiUser } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { CiViewList, CiCircleMore } from 'react-icons/ci';
import { BiLeaf } from 'react-icons/bi';
import { TiSocialTwitterCircular } from 'react-icons/ti';
import { AiFillHome } from 'react-icons/ai';
import Link from 'next/link';
import UserProfile from './UserProfile';
import More from './More';
import Head from 'next/head';

const Sidebar = () => {
  const [sidebar] = useState([
    { text: 'Home', component: <AiFillHome />, url: '/' },
    { text: 'Explore', component: <BiHash />, url: '/explore' },
    { text: 'Notification', component: <IoMdNotificationsOutline />, url: '/notification' },
    { text: 'Messages', component: <BiMessageRounded />, url: '/message' },
    { text: 'Lists', component: <CiViewList />, url: '/lists' },
    { text: 'Bookmarks', component: <BiBookmark />, url: '/bookmarks' },
    { text: 'Twitter Blue', component: <TiSocialTwitterCircular />, url: '/twitterblue' },
    { text: 'Profile', component: <BiUser />, url: '/profile' },
    { text: 'More', component: <CiCircleMore />, url: '' },
  ]);
  const [more, setMore] = useState(false);
  const sidebarRef = useRef(null);
  const [activeOption, setActiveOption] = useState(0);

  const handleOptionClick = (index) => {
    setActiveOption(index);
  };

  const handleMore = () => {
    setMore(!more);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setMore(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  const activeUrl = sidebar[activeOption].url;
  const pageTitle = activeUrl === '' ? 'More' : activeUrl.substring(1).charAt(0).toUpperCase() + activeUrl.substring(2);

  const dyamictitle = sidebar[activeOption].url === '/' ? 'Home' : pageTitle;

  return (
    <>
      <Head>
        <title>{`${dyamictitle} / Twitter`}</title>
      </Head>
      <div className="hidden md:block shrink-[2] border-r-[1px]" ref={sidebarRef}>
        <div className=' w-[88px] lg:w-[100%]  flex justify-end px-[8px] flex-col'>
          <div className=" flex flex-col justify-start items-center lg:items-start  ">

            <ul>
              <div className="block">
                <Link href="/">
                  <div className="px-[12px]">
                    <BsTwitter className="h-[46px] twitter-color hover rounded-full w-[46px] p-[10px]" />
                  </div>
                </Link>
              </div>
              {sidebar.map((sidenav, index) => (
                <Link href={sidenav.url} key={index}>
                  <li
                    className={`flex items-center text-center ${activeOption === index ? 'font-bold ' : ''
                      }`}
                    onClick={() => handleOptionClick(index)}
                  >
                    <div className="flex items-center p-[12px] lg:px-[20px] hover hover:rounded-full h-[56px]">
                      <span>
                        {React.cloneElement(sidenav.component, {
                          size: 30,
                          color: activeOption === index ? 'black' : 'inherit',
                        })}
                      </span>
                      <span
                        className={`text-[20px] lg:block hidden ml-[16px] ${activeOption === index ? 'font-bold' : ''
                          }`}
                      >
                        {sidenav.text}
                      </span>
                    </div>
                  </li>
                </Link>
              ))}
              <button onClick={handleMore}>
                {sidebar[activeOption].url === '' && <More />}
                {more && <More />}
              </button>
              <button
                className="twitter-bg-color hidden lg:block w-[90%] text-[17px] font-bold my-[16px] text-white rounded-full h-[56px] min-h-[52px]"
                onClick={handleMore}
              >
                Tweet
              </button>
              <div className=' twitter-bg-color min-w-[52px] text-[17px] font-bold my-[16px] text-white flex items-center justify-center lg:hidden min-h-[52px] h-[52px] w-[52px] rounded-full'>
                +
                <BiLeaf />
              </div>
            </ul>

          </div>
          <UserProfile />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
