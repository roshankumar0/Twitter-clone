import React, { useState, useRef, useEffect } from 'react';
import { IoLogoTwitter } from 'react-icons/io';

import { BiLeaf } from 'react-icons/bi';
import Link from 'next/link';
import UserProfile from './UserProfile';
import Mores from './More';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { Home, Message, Notifications, Lists, Bookmarks, Twitterblue, More, Profile, Explore } from '../components/icons';
import { NON_AUTHENTICATED_PAGES } from '../utils/constants';

const Sidebar = () => {
  const [sidebar] = useState([
    { text: 'Home', component: <Home />, url: '/' },
    { text: 'Explore', component: <Explore />, url: '/explore' },
    { text: 'Notifications', component: <Notifications />, url: '/notification' },
    { text: 'Messages', component: <Message />, url: '/message' },
    { text: 'Lists', component: <Lists />, url: '/lists' },
    { text: 'Bookmarks', component: <Bookmarks />, url: '/bookmarks' },
    { text: 'Twitter Blue', component: <Twitterblue />, url: '/twitterblue' },
    { text: 'Profile', component: <Profile />, url: '/profile' },
    { text: 'More', component: <More />, url: '' },
  ]);

  const [more, setMore] = useState(false);
  const sidebarRef = useRef(null);
  const [activeOption, setActiveOption] = useState(0);
  const [Notification, seNotification] = useState(12);
  const { roshan } = useSelector(state => state.names);

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

  const dynamicTitle = sidebar[activeOption].url === '/' ? 'Home' : pageTitle;

  if (!roshan || NON_AUTHENTICATED_PAGES.includes(window.location.pathname)) {
    return <div></div>
  }

  return (
    <>
      <Head>
        <title>{`${dynamicTitle} / Twitter`}</title>
      </Head>
      <div className="hidden w-[275px] md:block h-[100%] fixed" ref={sidebarRef}>
        <div className=' w-[88px] lg:w-[100%] h-[100%] flex justify-between px-[8px] flex-col'>
          <div className=" flex flex-col justify-start items-center lg:items-start  ">
            <div className='w-full'>
              <div className='w-full mt-[2px] mb-[4px] flex flex-col'>
                <div className="block">
                  <Link href="/">
                    <div>
                      <IoLogoTwitter className="h-[51.4px] twitter-color hover rounded-full w-[51.4px] p-[10px]" />
                    </div>
                  </Link>
                </div>
                <div>
                  <ul className='flex flex-col font-[Roboto] pt-[4px]'>
                    {sidebar.map((sidenav, index) => (
                      <Link href={sidenav.url} key={index}>
                        <li
                          className={`flex items-center text-center py-[1px] ${activeOption === index ? 'font-bold ' : ''
                            }`}
                          onClick={() => handleOptionClick(index)}
                        >
                          <div className="flex items-center p-[12px] hover hover:rounded-full h-[56px]">
                            <div className=''>
                              <div className='p-3 pl-[0] '>
                                <div className=' h-[26.25px] w-[26.25px] relative'>
                                  {React.cloneElement(sidenav.component, {
                                    color: activeOption === index ? 'black' : 'inherit',
                                  })}
                                  {sidenav.text === 'Home' && (
                                    <div className=" top-[-4px] right-[1px] w-[7px] h-[7px] absolute  font-light flex items-center justify-center bg-[#1D9BF0] rounded-full"></div>

                                  )}
                                  <div onClick={() => seNotification('')}>
                                    {sidenav.text === 'Notifications' && Notification && (
                                      <div className=" w-[24px] h-[16px] absolute top-[-6px] right-[-3px] text-[10px] font-light flex items-center justify-center bg-[#1D9BF0] text-white rounded-full">{Notification}</div>
                                    )}
                                  </div>
                                </div>

                              </div>
                            </div>
                            <div
                              className={`text-[20.3px] tracking-wide  lg:block hidden ml-[8px] leading-[24px] text-[#0E1419] ${activeOption === index ? 'font-bold' : ''
                                }`}
                            >
                              <span> {sidenav.text}</span>
                            </div>

                          </div>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
                <div className='flex'>
                  <button onClick={handleMore}>
                    {sidebar[activeOption].url === '' && <Mores />}
                    {more && <Mores />}
                  </button>
                  <button
                    className="bg-[#1D9BF0] hidden lg:block w-[90%] text-[17px] font-bold my-[16px] text-white rounded-full min-h-[52px]"
                    onClick={handleMore}
                  >
                    Tweet
                  </button>
                  <div className=' twitter-bg-color min-w-[52px] text-[17px] font-bold my-[16px] text-white flex items-center justify-center lg:hidden min-h-[52px] h-[52px] w-[52px] rounded-full'>
                    +
                    <BiLeaf />
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div><UserProfile /></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
