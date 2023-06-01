import { BsSearch } from 'react-icons/bs';
const Search = () => {


  return (
    <div className=' bg-white'>
      <div className=' '>
        <div className='flex z-[99] items-center text-color font-light '>
          <div className='   flex flex-1  items-center hidden md:block top-[4px] fixed w-[350px] rounded-full bg-[#EFF3F4] '>
          <div className='flex items-center min-h-[32px] h-[42px]'>
          <div className='pl-[12px]'>
          <BsSearch  />
          </div>
          <div className='flex-1'>
          <input type='text' placeholder='Search Twitter' className=' h-full p-[12px] flex-1 bg-transparent outline-none ' />
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
