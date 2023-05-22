import React from 'react'
import { BsTwitter } from 'react-icons/bs';
import { BiHomeCircle, BiHash, BiMessageRounded, BiBookmark, BiUser } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { CiViewList, CiCircleMore } from 'react-icons/ci';
import { TiSocialTwitterCircular } from 'react-icons/ti';
import SidebarOptions from './sidebarOptions';
import Link from 'next/link';
import UserProfile from './UserProfile';


const Sidebar = () => {
    return (
        <>
            <div className=' w-[275px] flex flex-col justify-start border-r-2 overflow-y-scroll h-[100vh]' >
                <Link href={`/home`}>
                    <div className='px-[12px]'> <BsTwitter className='h-[46px] twitter-color hover rounded-full w-[46px] p-[10px]' />
                    </div>
                </Link>
                <div className='flex flex-col'>
                    <Link href='/'>
                        <SidebarOptions active Icon={BiHomeCircle} text={'Home'} />
                    </Link>
                    <Link href='explore'>
                        <SidebarOptions Icon={BiHash} text={'Explore'} />
                    </Link>
                    <Link href={`/notification`}>
                        <SidebarOptions Icon={IoMdNotificationsOutline} text={'Notifications'} />
                    </Link>
                    <Link href={`/message`}>
                        <SidebarOptions Icon={BiMessageRounded} text={'Messages'} />
                    </Link>
                    <Link href={`/lists`}>
                        <SidebarOptions Icon={CiViewList} text={'Lists'} />
                    </Link>
                    <Link href={`/bookmarks`}>
                        <SidebarOptions Icon={BiBookmark} text={'Bookmarks'} />
                    </Link>
                    <Link href={`/twitterblue`}>
                        <SidebarOptions Icon={TiSocialTwitterCircular} text={'Twitter Blue'} />
                    </Link>
                    <Link href={`/profile`}>
                        <SidebarOptions Icon={BiUser} text={'Profile'} />
                    </Link>
                    <Link href={`/more`}>
                        <SidebarOptions Icon={CiCircleMore} text={'More'} />
                    </Link>
                </div>
                <button className='twitter-bg-color w-[90%] text-[17px] font-bold my-[16px] text-white rounded-full h-[56px]'>Tweet</button>
                <UserProfile />
            </div>

        </>
    )
}

export default Sidebar
