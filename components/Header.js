import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsTwitter } from 'react-icons/bs';

const Header = ({ userData }) => {
  console.log(userData)
  const [user] = useState([
    { userPersonal: "For you" },
    { userPersonal: "Following" },
  ]);
  useEffect(() => {
    const fetchdata = async () => {
      const data=await axios.get("http://localhost:3000/api/users")
      console.log(data.data)
    }
    fetchdata()
  }, [])
  return (
    <div className='sticky top-0 bg-white px-[16px] flex flex-col z-10'>
      <div className='md:hidden flex items-center justify-between'>
        <div>ROSHAN</div>
        <div><BsTwitter /></div>
        <div></div>
      </div>
      <h2 className='font-bold text-black'>Home</h2>
      <div className='flex justify-between '>
        {user.map((users, index) => (
          <div className=' hover:bg-slate-100 flex-1  justify-center flex'>
            <p
              key={index}
              className={`font-bold cursor-pointer py-4 ${index === 0 ? 'relative' : ''
                }`}
            >
              {index === 0 && (
                <span className="absolute bottom-0 left-0 w-[100%] h-[4px] bg-[#1D9BF0]"></span>
              )}
              {users.userPersonal}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};


export async function getStaticProps() {
  try {
    const response = await axios.get('http://localhost:3000/api/users');
    const userData = response.data;
    return {
      props: {
        userData,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        userData: null,
      },
    };
  }
}


export default Header;
