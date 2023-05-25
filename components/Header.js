import React, { useState } from 'react';
import { BsTwitter } from 'react-icons/bs';
import Following from '../pages/following';
import Index from '../pages/index';

const Header = () => {
  const [user] = useState([
    { userPersonal: "For you", Component: Index },
    { userPersonal: "Following", Component: Following },
  ]);
  const [active, setActive] = useState(0);

  const handleUser = (index) => {
    setActive(index);
  };

  const ActiveComponent = user[active].Component;

  return (
    <div className='sticky top-0 bg-white px-[16px] flex flex-col z-10'>
      <div className='md:hidden flex items-center justify-between'>
        <div>ROSHAN</div>
        <div><BsTwitter /></div>
        <div></div>
      </div>
      <h2 className='font-bold text-black'>Home</h2>
      <div className='flex justify-between'>
        {user.map((users, index) => (
          <div
            onClick={() => handleUser(index)}
            key={index}
            className={`hover:bg-slate-100 flex-1 justify-center flex `}
          >
            <p className={`font-bold cursor-pointer py-4 ${active === index && "border-b-[4px] rounded-sm border-blue-400"}`}>{users.userPersonal}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
