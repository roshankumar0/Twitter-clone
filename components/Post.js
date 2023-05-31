import React, { useState } from 'react';
import { VscVerifiedFilled } from 'react-icons/vsc';
import { IoIosMore } from 'react-icons/io';
import { AiOutlineMessage, AiOutlineHeart } from 'react-icons/ai';
import { CiShare1 } from 'react-icons/ci';
import { BsArrowBarUp } from 'react-icons/bs';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmail } from '../store/cartSlice';




const Post = (props) => {
    const { userProfile,tweet } = useSelector((state) => state.names)
    const userEmail = useSelector((state) => state.names.email);
    const {  post, color, time, message, share, likes, views, taguser } = props
    const [inputs, setInput] = useState('')
    const dispatch = useDispatch()
    const { email } = useSelector((state) => state.names)
    const handlesubmit = (e) => {
        e.preventDefault();
        const emails = inputs.split(',');
        dispatch(updateEmail(emails));
        setInput('');
    };

    return (
        <div className='  border-t-[1px]'>
            <div className='flex flex-col hover:bg-[#EFF3F4]  ease-in duration-300 px-[16px]'>
                <div className='flex pt-[12px]  max-w-[425px]  md:max-w-[100%]'>
                    <div className='w-[48px] mr-[12px]'>
                        <img className=' mr-[12px] object-cover h-[48px] w-[48px] rounded-full cursor-pointer ' src={`${userProfile}`} alt="logo profile" />
                    </div>
                    <div className='flex-1 pb-[12px] flex flex-col'>
                        <div className=' flex justify-between'>
                            <div className='flex'>
                                <span>{userEmail}</span>
                                <div className='text-color flex items-center'>
                                    <VscVerifiedFilled className='twitter-color' />
                                    <div className=' flex items-center justify-between'>
                                        <div className='ml-[4px]'>@ {tweet}  </div>
                                        <div>.</div>
                                        <div>{time}</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <IoIosMore />
                            </div>
                        </div>
                        <div>
                        </div>
                        <div className='flex-1'>
                            <div className='mt-[12px]  md:w-full'>
                                <img className='rounded-[20px] w-[100%] mr-[12px]   cursor-pointer' src={`${post}`} alt="" />
                            </div>
                        </div>
                        <div className='mt-[12px]'>
                            <div className='flex items-center justify-between md:w-[425px] mt-[12px] text-[#536471]'>
                                <div className='flex items-center cursor-pointer hover:text-[#1D9BF0]'>
                                    <div className='hover:bg-[#4f3232] p-[8px] rounded-full'>
                                        <AiOutlineMessage />
                                    </div>
                                    <h2 className='px-[12px] text-[13px] hidden md:block'>{message}</h2>
                                </div>
                                <div className='flex items-center cursor-pointer  '>
                                    <CiShare1 />
                                    <h2 className='px-[12px] text-[13px]'>{share}</h2>
                                </div>
                                <div className='flex items-center cursor-pointer'>
                                    <AiOutlineHeart />
                                    <h2 className='px-[12px] text-[13px]'>{likes}</h2>
                                </div>
                                <div className='items-center cursor-pointer hidden md:block'>
                                    <TbBrandGoogleAnalytics />
                                    <h2 className='px-[12px] text-[13px]'>{views}</h2>
                                </div>
                                <div className='flex items-center cursor-pointer'>
                                    <BsArrowBarUp />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Post
