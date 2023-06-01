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
    <div className=' '>
      <div className={`  flex h-[100vh] ${scrolls ? "bg-red-500" : ""}`}>
        <div className="  flex-1 flex justify-between">
          <div className=' flex flex-col max-w-[600px]'>
            <div className='sticky top-0 z-10 bg-white'><Header /></div>
            <div>< TweetChat /></div>
            <div><Feeds /></div>
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
