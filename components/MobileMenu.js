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
    <div className='flex md:hidden justify-around fixed bottom-0 border right-0 left-0  bg-white list-none'>
      {MobileMenuIcon.map((icon) => (
        <li className='p-[8px]'>
          <Link href={`${icon.url}`}>
            <span className='cursor-pointer'>
              {React.cloneElement(icon.Icon, {
                style: { width: '26px', height: '26px' },
              })}
            </span>
          </Link>
        </li>
      ))}
    </div>
  );
};

export default MobileMenu;
