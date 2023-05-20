import React from 'react'

const SidebarOptions = ({ Icon, text, active }) => {
    return (
        <>
            <div className={`flex items-center text-center  ${active && 'text-black font-bold'} `}>
                <div className='flex items-center px-[20px]  hover hover:rounded-full h-[56px] cursor-pointer'>
                    <Icon className='w-[25.5px] h-[25.5px]' />
                    <h2 className='text-[20px] ml-[16px]'>{text}</h2>
                </div>
            </div>

        </>
    )
}

export default SidebarOptions
