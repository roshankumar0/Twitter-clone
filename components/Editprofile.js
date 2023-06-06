import React, { useEffect, useRef, useState } from 'react';
import { RxCross2 } from 'react-icons/rx'
import { AiFillCamera } from 'react-icons/ai'
import { useSelector } from 'react-redux';

const Editprofile = () => {
    const [cross, setCross] = useState(false);
    const { userProfile } = useSelector(state => state.names)


    const handleToggleCross = () => {
        setCross((prevState) => !prevState);
    };

    return (
        <div
            className={`fixed top-[30%] bg-white z-40 w-[33%] left-[29%] h-[50vh] overflow-y-scroll rounded-lg ${cross && "hidden"
                }`}
        >
            <div className='flex justify-between p-[12px]'>
                <div className='flex items-center'>
                    <div onClick={handleToggleCross} className='cursor-pointer hover:bg-slate-300 rounded-full p-[8px]'><RxCross2 /></div>
                    <div className='text-[20px] text-black' >Edit profile</div>
                </div>
                <div className='bg-[#0F1419] text-white rounded-full px-[16px]'><span className='text-[14px] min-h-[32px] items-center cursor-pointer flex'>save</span></div>
            </div>
            <div>
                <div className='h-[200px] bg-gray-400 relative'>
                    <div className='absolute left-[50%] top-[50%] bg-slate-300 rounded-full p-[8px] cursor-pointer hover:bg-slate-200 translate-y-[-50%] translate-x-[-50%]'>
                        <AiFillCamera />
                    </div>
                    <div className='h-[100px] cursor-pointer w-[100px] bg-white bottom-[-50px] absolute left-5 rounded-full p-[4px]'>
                        <img className='rounded-full w-full h-full object-cover' src={userProfile} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Editprofile;
