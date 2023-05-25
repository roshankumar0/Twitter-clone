import React, { useState, useEffect, useRef } from 'react';
import { RxBorderDotted } from 'react-icons/rx';
import Login from './Login';

const UserProfile = () => {
  const [login, setLogin] = useState(false);
  const userProfileRef = useRef(null);

  const handleLogin = () => {
    setLogin(!login);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userProfileRef.current && !userProfileRef.current.contains(event.target)) {
        setLogin(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col relative" ref={userProfileRef}>
      <div className="absolute bottom-16 right-0 left-0">
        {login && <Login />}
      </div>
      <div className="flex items-center justify-between p-[12px]">
        <div className="flex">
          <img
            src="https://pbs.twimg.com/media/Fwn_-4fWcAE018c?format=png&name=small"
            alt=""
            className="h-[50px] w-[50px] rounded-full"
          />
          <span className="flex flex-col">
            <div>ROSHAN</div>
            <div>@ROSHNN01</div>
          </span>
        </div>
        <div onClick={handleLogin} className="cursor-pointer">
          <RxBorderDotted />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;


 {/* <ul className='flex flex-col sidebarIcon'>
                    <li> <Link href='/'>
                        <SidebarOptions active Icon={BiHomeCircle} text={'Home'} />
                    </Link></li>
                    <li> <Link href='explore'>
                        <SidebarOptions Icon={BiHash} text={'Explore'} />
                    </Link></li>
                    <li> <Link href={`/notification`}>
                        <SidebarOptions Icon={IoMdNotificationsOutline} text={'Notifications'} />
                    </Link></li>
                    <li>  <Link href={`/message`}>
                        <SidebarOptions Icon={BiMessageRounded} text={'Messages'} />
                    </Link></li>
                    <li> <Link href={`/lists`}>
                        <SidebarOptions Icon={CiViewList} text={'Lists'} />
                    </Link></li>
                    <li>  <Link href={`/bookmarks`}>
                        <SidebarOptions Icon={BiBookmark} text={'Bookmarks'} />
                    </Link></li>
                    <li> <Link href={`/twitterblue`}>
                        <SidebarOptions Icon={TiSocialTwitterCircular} text={'Twitter Blue'} />
                    </Link></li>
                    <li> <Link href={`/profile`}>
                        <SidebarOptions Icon={BiUser} text={'Profile'} />
                    </Link></li>
                    <li onClick={handleMore}>
                        <SidebarOptions Icon={CiCircleMore} text={'More'} />
                    </li>
                </ul> */}





              //   const handleMore = () => {
              //     setMore(!more);
              // };
          
              // useEffect(() => {
              //     const handleClickOutside = (event) => {
              //         if (userProfileRef.current && !userProfileRef.current.contains(event.target)) {
              //             setMore(false);
              //         }
              //     };
          
              //     document.addEventListener('click', handleClickOutside);
          
              //     return () => {
              //         document.removeEventListener('click', handleClickOutside);
              //     };
              // }, []);