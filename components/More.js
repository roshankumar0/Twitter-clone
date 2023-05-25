import React from 'react';
import { MdVerified } from 'react-icons/md'

const More = () => {
    return (
        <div className='bg-gray-400 shadow-lg fixed z-50 right-[1071.3px] rounded-md top-[253.25px] h-[318px] w-[329px] px-[12px]'>
            <ul>
                <li className='flex items-center space-x-3'><span><MdVerified /></span><span>Connect</span></li>
                <li className='flex items-center space-x-3'><span><MdVerified /></span><span>Drafts</span></li>
                <li className='flex items-center space-x-3'><span><MdVerified /></span><span>Verified Orgs</span></li>

            </ul>
            <ul>
                <li>Creator Studio</li>
                <li>Professional Tools</li>
                <li>Settings and Support</li>
            </ul>
        </div>
    );
};

export default More;
