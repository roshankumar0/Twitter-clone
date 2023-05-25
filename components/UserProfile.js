import React, { useState, useEffect, useRef } from 'react';
import { RxBorderDotted } from 'react-icons/rx';
import Login from './Login';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const [login, setLogin] = useState(false);
  const userProfileRef = useRef(null);
  const {name,username} = useSelector((state) => state.names);

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
            <div>{name}</div>
            <div>{username}</div>
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
