import { BsSearch } from 'react-icons/bs';
import LiveTrending from '../components/LiveTrending'
const Widgets = () => {
  return (
    <>
      <div className='w-[350px]  '>
        <div className='flex flex-col'>
          <div className='h-[56px] min-h-[32px] flex fixed  items-center  z-20 bg-white'>
            <div className='flex-1 flex items-center text-[#677682] bg-[#EFF3F4] border rounded-full p-[17px] h-[44px]' style={{ width: '350px' }}>
             <div className='flex flex-col font-bold text-[15px] text-[#677682] min-w-[32px] cursor-pointer'>
             <BsSearch />
             </div>
              <input type='text' placeholder='Search Twitter' className='placeholder:text-[#677682]  h-full p-[12px] flex-1 bg-transparent outline-none' />
            </div>
          </div>
          <div className=''>
           <div  className='-z-40 bg-[#EFF3F4] mt-[64px] rounded-2xl'>
           <h1 className='py-[12px] px-[16px] text-[#0F1419] text-[20px] font-[700]'>What’s happening</h1>
            <div className=' rounded-lg'>
              <LiveTrending />
            </div>
           </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Widgets

