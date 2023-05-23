import React, { useState } from 'react';
import { BsTwitter } from 'react-icons/bs';

const Header = () => {
  const [user] = useState([
    { userPersonal: "For you" },
    { userPersonal: "Following" },
  ]);

  return (
    <div className='sticky top-0 bg-white px-[16px] flex flex-col'>
      <div className='md:hidden flex items-center justify-between'>
        <div>logo</div>
        <div><BsTwitter /></div>
        <div></div>
      </div>
      <h2 className='font-bold text-black'>Home</h2>
      <div className='flex justify-between '>
        {user.map((users, index) => (
          <div className=' hover:bg-slate-100 flex-1  justify-center flex'>
            <p
              key={index}
              className={`font-bold cursor-pointer py-4 ${index === 0 ? 'relative' : ''
                }`}
            >
              {index === 0 && (
                <span className="absolute bottom-0 left-0 w-[100%] h-[4px] bg-[#1D9BF0]"></span>
              )}
              {users.userPersonal}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
