import React from 'react';
import { VscVerifiedFilled } from 'react-icons/vsc';
import { IoIosMore } from 'react-icons/io';
import { AiOutlineMessage, AiOutlineHeart } from 'react-icons/ai';
import { CiShare1 } from 'react-icons/ci';
import { BsArrowBarUp } from 'react-icons/bs';

// Rest of your code


const Post = (props) => {
    const { username, post, time, message, share, likes, views, taguser, profile } = props
    return (
        <div className='  border-t-[1px]'>
            <div className='flex flex-col hover:bg-slate-100 ease-in duration-300 px-[16px]'>
                <div className='flex pt-[12px]'>
                    <div>
                        <img className=' mr-[12px]  h-[50px] w-[50px] rounded-full cursor-pointer' src={`${profile}`} alt="logo profile" />
                    </div>
                    <div className='flex-1 pb-[12px]'>
                        <div className=' flex justify-between'>
                            <div className='flex'>
                                <span>{username.toUpperCase()}</span>
                                <div className='text-color flex items-center'>
                                    <VscVerifiedFilled className='twitter-color' />
                                    <div className=' flex items-center justify-between'>
                                        <div className='ml-[4px]'>@{taguser}  </div>
                                        {/* <div className='ml-[4px]'>@{taguser.toUpperCase()}</div> */}
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
                            <div className='mt-[12px]'>
                                <img className='rounded-[20px] w-[100%] mr-[12px]   cursor-pointer' src={`${post}`} alt="" />
                            </div>
                        </div>
                        <div className='flex items-center justify-between w-[425px] mt-[12px]'>
                            <div className='flex items-center cursor-pointer hover:text-[#1D9BF0]'>
                                <div className='hover:bg-[#4f3232] p-[8px] rounded-full'>
                                    <AiOutlineMessage />
                                </div>
                                <h2 className='px-[12px]'>{message}</h2>
                            </div>
                            <div className='flex items-center cursor-pointer  '>
                                <CiShare1 />
                                <h2 className='px-[12px]'>{share}</h2>
                            </div>
                            <div className='flex items-center cursor-pointer'>
                                <AiOutlineHeart />
                                <h2 className='px-[12px]'>{likes}</h2>
                            </div>
                            <div className='flex items-center cursor-pointer'>
                                <AiOutlineHeart />
                                <h2 className='px-[12px]'>{views}</h2>
                            </div>
                            <div className='flex items-center cursor-pointer'>
                                <BsArrowBarUp />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Post
