import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';
import { IoMdNotifications } from 'react-icons/io';
import { BiMessageRounded } from 'react-icons/bi';
import Link from 'next/link';

const MobileMenu = () => {
  const [MobileMenuIcon] = useState([
    { Icon: <AiOutlineHome />, url: "/" },
    { Icon: <AiOutlineSearch />, url: "" },
    { Icon: <IoMdNotifications />, url: "" },
    { Icon: <BiMessageRounded />, url: "" },
  ]);

  return (
    <div className=' md:hidden  fixed bottom-0 border right-0 left-0  bg-white list-none'>
      <ul className='p-[8px] flex justify-around'>
        {MobileMenuIcon.map((icon, index) => (
          <li className='cursor-pointer ' key={index}>
            <Link href={`${icon.url}`}>
              {React.cloneElement(icon.Icon, {
                style: { width: '26px', height: '26px' },
              })}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
