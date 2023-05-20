import React from 'react'
import { BsTwitter } from 'react-icons/bs';
import { BiHomeCircle, BiHash, BiMessageRounded, BiBookmark, BiUser } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { CiViewList, CiCircleMore } from 'react-icons/ci';
import { TiSocialTwitterCircular } from 'react-icons/ti';
import SidebarOptions from './sidebarOptions';

const Sidebar = () => {
    return (
        <>
            <div className=' flex-[0.2] flex flex-col justify-start border-r-2 overflow-y-scroll' >
                <div className='px-[12px]'> <BsTwitter className='h-[46px] twitter-color hover rounded-full w-[46px] p-[10px]' />
                </div>
                <div className='flex flex-col'>
                    <SidebarOptions active Icon={BiHomeCircle} text={'Home'} />
                    <SidebarOptions Icon={BiHash} text={'Explore'} />
                    <SidebarOptions Icon={IoMdNotificationsOutline} text={'Notifications'} />
                    <SidebarOptions Icon={BiMessageRounded} text={'Messages'} />
                    <SidebarOptions Icon={CiViewList} text={'Lists'} />
                    <SidebarOptions Icon={BiBookmark} text={'Bookmarks'} />
                    <SidebarOptions Icon={TiSocialTwitterCircular} text={'Twitter Blue'} />
                    <SidebarOptions Icon={BiUser} text={'Profile'} />
                    <SidebarOptions Icon={CiCircleMore} text={'More'} />
                    <SidebarOptions Icon={CiCircleMore} text={'More'} />
                    <SidebarOptions Icon={CiCircleMore} text={'More'} />
                    <SidebarOptions Icon={CiCircleMore} text={'More'} />
                    <SidebarOptions Icon={CiCircleMore} text={'More'} />
                    <SidebarOptions Icon={CiCircleMore} text={'More'} />
                    <SidebarOptions Icon={CiCircleMore} text={'More'} />
                    <SidebarOptions Icon={CiCircleMore} text={'More'} />
                </div>
                <button className='twitter-bg-color w-[90%] my-[16px] text-white rounded-full h-[56px]'>Tweet</button>
            </div>

        </>
    )
}

export default Sidebar
