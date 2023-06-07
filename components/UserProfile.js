import React, { useState, useEffect, useRef } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import Image from 'next/image';import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInfo } from '../store/cartSlice';

const UserProfile = () => {
  const [login, setLogin] = useState(false);
  const userProfileRef = useRef(null);
  const { name, username, userProfile } = useSelector((state) => state.names);
  const dispatch = useDispatch();

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

  const handleClick = () => {
    if (name === 'Shivam' && username === 'kamal si') {
      // Revert to the initial values
      dispatch(updateUserInfo({ name: 'Roshan Kumar', username: 'ROSHNN01' }));
    } else {
      // Update to the new values
      dispatch(updateUserInfo({ name: 'Shivam', username: 'kamal singh' }));
    }
  };

  return (
    <div className="flex flex-col relative my-[12px] hover:bg-red-300" ref={userProfileRef}>
      <div className="absolute bottom-16 right-0 left-0">
        {login && <Login />}
      </div>
      <div className="flex items-center p-[12px]" onClick={handleClick}>
        <div className="h-[100%] w-[100%] flex justify-center">
          <Image
           width={40}
           height={40}
           loading="lazy"
            src={`${userProfile}`}
            alt=""
            className="object-cover flex rounded-full"
          />
        </div>
        <div className="lg:flex hidden  flex-col text-[15px] font-[Roboto] mx-[12px]">
          <div className='font-bold'>{name}</div>
          <div className='text-[#536471]'>@{username}</div>
        </div>
        <div onClick={handleLogin} className="justify-end w-[100%] hidden lg:flex cursor-pointer text-[#536471] font-bold">
          <BsThreeDots style={{fontWeight:"bold",display:"block",color:"black",height:"18.75px",width:"18.75px"}} />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
