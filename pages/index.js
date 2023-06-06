import React, { useEffect, useState } from 'react';
import Feeds from '../components/feeds';
import Widgets from '../components/widgets';
import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';
import TweetChat from '../components/TweetChat'
function Index() {
  const [scrolls, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='w-[990px] '>
      <div className={`  flex h-[100vh] `}>
        <div className=" flex-1 flex justify-between">
          <div className='  flex flex-col max-w-[600px] relative'>
            <div className=''>
              <div className='fixed w-[600px] md:w-[600px] top-0 z-10 bg-white' style={{ background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(5px)' }}>
                <Header />
              </div>
            </div>
            <div className='lg:mt-[112px] border'>
              <div>< TweetChat /></div>
              <p className='text-[#1D9BF0] flex justify-center items-center min-h-[48px] text-[15px]  border-t'><span className='w-full text-center leading-[20px]'> Show 209 Tweets</span></p>
              <div><Feeds /></div>
            </div>

          </div>
          <div className="hidden lg:block w-[350px] mr-[10px]">
            <Widgets />
          </div>
        </div>
      </div>
      <MobileMenu />
    </div>
  );
}

export default Index;
