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
      <div className="flex items-center justify-between">
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
