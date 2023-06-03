
import React, { useState } from 'react';
import { BsTwitter } from 'react-icons/bs';
import Following from '../pages/following';
import Index from '../pages/index';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Header = () => {
  const { userProfile } = useSelector((state) => state.names)
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
    <div className='border-b-1'>
      <div className=' flex flex-col z-10 '>
        <div className='md:hidden items-center justify-between block relative'>
          <div className='hidden md:block'>ROSHAN</div>
          <div className='flex items-center md:hidden min-h-[53px]'>
            <div className='flex-1'>
              <Link href={`/`}>
                <img className='mr-[12px] h-[32px] w-[32px] rounded-full cursor-pointer' src={`${userProfile}`} alt="" />
              </Link>
            </div>
            <div >
              <Link href="/">
                <div className="px-[12px]">
                  <BsTwitter className="h-[46px] twitter-color hover rounded-full w-[46px] p-[10px]" />
                </div>
              </Link>
            </div>
            <div className='flex-1'>
            </div>
          </div>
          <div></div>
        </div>
        <div className='border-b'>
          <div className='flex flex-col'>
            <h2 className='font-bold hidden h-[53px] lg:flex flex-col justify-center md:block text-black text-[20px] leading-[24px] pt-[2px] pl-[12px]'><span className=''>Home</span></h2>
            <div></div>
          </div>        <div className='flex justify-between'>
            {user.map((users, index) => (
              <div
                onClick={() => handleUser(index)}
                key={index}
                className={`md:hover:bg-slate-100 flex-1 justify-center flex`}
              >
                <p className={` text-[15px] text-[#536471]  font-bold cursor-pointer py-4 ${active === index && "border-b-[4px] text-black rounded-sm font-bold text-[#536471]  border-blue-400"}`}>{users.userPersonal}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
