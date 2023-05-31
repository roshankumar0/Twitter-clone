import React, { useState, useEffect, useRef } from 'react';
import { RxBorderDotted } from 'react-icons/rx';
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInfo } from '../store/cartSlice';

const UserProfile = () => {
  const [login, setLogin] = useState(false);
  const userProfileRef = useRef(null);
  const { name, username,userProfile } = useSelector((state) => state.names);
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
    <div className="flex flex-col relative" ref={userProfileRef}>
      <div className="absolute bottom-16 right-0 left-0">
        {login && <Login />}
      </div>
      <div className="flex items-center justify-between p-[12px]" onClick={handleClick}>
        <div className="flex">
          <img
            src={`${userProfile}`}
            alt=""
            className="object-cover h-[40px] w-[40px] rounded-full"
          />
          <span className=" flex-col hidden lg:flex text-[15px]">
            <div>{name}</div>
            <div>{username}</div>
          </span>
        </div>
        <div onClick={handleLogin} className="cursor-pointer hidden lg:block">
          <RxBorderDotted />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
