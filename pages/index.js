import React, { useEffect, useState } from 'react';
import Feeds from '../components/feeds';
import Widgets from '../components/widgets';
import Header from '../components/Header';
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
  <div className=' max-w-[1300px] overflow-y-scroll'>
     <div className={`shrink-[4] max-w-[990px] flex md:h-[100vh]  h-[153vh] ${scrolls ? "bg-red-500" : ""}`}>
      <div className="  flex-1   justify-evenly lg:justify-between flex">
        <div className='max-w-[600px] border-[1px]'>
          <Header />
          <Feeds />
        </div>
        <div className="hidden lg:block w-[350px] mr-[10px]">
          <Widgets />
        </div>
      </div>
    </div> 
  </div>
  );
}

export default Index;
