import React from 'react';
import { VscVerifiedFilled } from 'react-icons/vsc';
import { IoIosMore } from 'react-icons/io';
import { AiOutlineMessage, AiOutlineHeart } from 'react-icons/ai';
import { CiShare1 } from 'react-icons/ci';
import { SiSimpleanalytics } from 'react-icons/si';
import { BsArrowBarUp } from 'react-icons/bs';
import PostDetails from './PostDetails';

// Rest of your code


const Post = (props) => {
    const { username, post, time, message, share, likes, views, taguser, profile } = props
    return (
        <div className='flex flex-col'>
            <div className='flex'>
                <div>
                    <img className=' mr-[12px]  h-[50px] w-[50px] rounded-full cursor-pointer' src={`${profile}`} alt="logo profile" />

                </div>
                <div className='flex-1'>
                    <div className=' flex justify-between'>
                        <div className='flex'>
                            <span>{username.toUpperCase()}</span>
                            <div className='text-color flex items-center'>
                                <VscVerifiedFilled className='twitter-color' />
                                <div className=' flex '>
                                    <div>@{taguser.toUpperCase()}</div>
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
                        <div className='w-[404px]'>
                            <img className='rounded-[20px] w-[100%] mr-[12px]   cursor-pointer' src={`${post}`} alt="" />
                        </div>
                        {/* <PostDetails Icon={AiOutlineMessage} message={message} color={`black`} />
                        <PostDetails Icon={CiShare1} likes={likes}  color={`red`} />
                        <PostDetails Icon={AiOutlineHeart} message={`20k`} color={`pink`} />
                        <PostDetails Icon={SiSimpleanalytics} message={`250k`} color={`blue`} />
                        <PostDetails Icon={BsArrowBarUp} message={`290`} color={`blue`} /> */}

                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <AiOutlineMessage />
                    <h2 className='px-[12px]'>{message}</h2>
                </div>
                <div className='flex items-center'>
                    <CiShare1 />
                    <h2 className='px-[12px]'>{share}</h2>
                </div>
                <div className='flex items-center'>
                    <AiOutlineHeart />
                    <h2 className='px-[12px]'>{likes}</h2>
                </div>
                <div className='flex items-center'>
                    <AiOutlineHeart />
                    <h2 className='px-[12px]'>{views}</h2>
                </div>
                <div className='flex items-center'>
                    <BsArrowBarUp />
                </div>
            </div>
        </div>

    )
}

export default Post
