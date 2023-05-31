import React from 'react';
import { MdVerified } from 'react-icons/md'
import { AiOutlineDown } from 'react-icons/ai'

const More = () => {
    return (
        <div className='morebg shadow-lg fixed z-50 right-[1071.3px] rounded-md top-[253.25px] h-[318px] w-[329px] px-[12px]'>
            <ul className=''>
                <li className='flex items-center text-[20px]  py-[16px]'><span className='mr-[24px] text-[24px]'><MdVerified /></span><span>Connect</span></li>
                <li className='flex items-center text-[20px]  py-[16px]'><span className='mr-[24px] text-[24px]'><MdVerified /></span><span>Drafts</span></li>
                <li className='flex items-center text-[20px]  py-[16px]'><span className='mr-[24px] text-[24px]'><MdVerified /></span><span>Verified Orgs</span></li>

            </ul>
            <ul className='flex flex-col'>
                <li className='flex py-[16px] items-center justify-between'><span>Creator Studio</span><span><AiOutlineDown /></span></li>
                <li className='flex py-[16px] items-center justify-between'><span>Professional Tools</span><span><AiOutlineDown /></span></li>
                <li className='flex py-[16px] items-center justify-between'><span>Settings and Support</span><span><AiOutlineDown /></span></li>
            </ul>
        </div>
    );
};

export default More;
