import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';
import { IoMdNotifications } from 'react-icons/io';
import { BiMessageRounded } from 'react-icons/bi';

const MobileMenu = () => {
  const [MobileMenuIcon] = useState([
    { Icon: <AiOutlineHome /> },
    { Icon: <AiOutlineSearch /> },
    { Icon: <IoMdNotifications /> },
    { Icon: <BiMessageRounded /> },
  ]);

  return (
    <div className='flex md:hidden justify-around fixed bottom-0 border right-0 left-0 py-[16px] bg-white'>
      {MobileMenuIcon.map((icon) => (
        <span className='cursor-pointer'>
          {React.cloneElement(icon.Icon, {
            style: { width: '42px', height: '42px' },
          })}
        </span>
      ))}
    </div>
  );
};

export default MobileMenu;
