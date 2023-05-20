import React from 'react';
import { VscVerifiedFilled } from 'react-icons/vsc';
import { IoIosMore } from 'react-icons/io';
import { AiOutlineMessage, AiOutlineHeart } from 'react-icons/ai';
import { CiShare1 } from 'react-icons/ci';
import { SiSimpleanalytics } from 'react-icons/si';
import { BsArrowBarUp } from 'react-icons/bs';
import PostDetails from './PostDetails';

// Rest of your code


const Post = () => {
    return (
        <div className='flex hover'>
            <div>
                <img className=' mr-[12px]  h-[50px] w-[50px] rounded-full cursor-pointer' src="https://scontent.fdbd4-1.fna.fbcdn.net/v/t39.30808-1/311437557_3511691865783889_7021292410858709402_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=JV0mxC0UO5oAX89gbW0&_nc_ht=scontent.fdbd4-1.fna&oh=00_AfB4j_qJiY-6tEbaagnsYS9ZjTev4F3vqNbjaoTeyv3Nzg&oe=646C6B5B" alt="" />

            </div>
            <div className='flex-1'>
                <div className=' flex justify-between'>
                    <div className='flex'>
                        <span>Elon Musk</span>
                        <div className='text-color flex items-center'>
                            <VscVerifiedFilled className='twitter-color' />
                            <div className=' flex '>
                                <div>@roshankumar0</div>
                                <div>.</div>
                                <div>4hour</div>
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
                        <img className='rounded-[20px] w-[100%] mr-[12px]   cursor-pointer' src="https://scontent.fdbd4-1.fna.fbcdn.net/v/t39.30808-1/311437557_3511691865783889_7021292410858709402_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=JV0mxC0UO5oAX89gbW0&_nc_ht=scontent.fdbd4-1.fna&oh=00_AfB4j_qJiY-6tEbaagnsYS9ZjTev4F3vqNbjaoTeyv3Nzg&oe=646C6B5B" alt="" />
                    </div>
                    <div className='flex justify-between'>
                        <PostDetails Icon={AiOutlineMessage} message={`290k`} color={`black`} />
                        <PostDetails Icon={CiShare1} message={`290k`} color={`red`} />
                        <PostDetails Icon={AiOutlineHeart} message={`290k`} color={`pink`} />
                        <PostDetails Icon={SiSimpleanalytics} message={`290k`} color={`blue`} />
                        <PostDetails Icon={BsArrowBarUp} message={`290k`} color={`blue`} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
