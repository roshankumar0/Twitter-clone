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
    <div className={`max-w-[1300px] m-auto flex md:h-[100vh] h-[153vh] ${scrolls ? "bg-red-500" : ""}`}>
      <div className="flex flex-1 overflow-y-scroll md:w-[990px]">
        <div>
          <Header />
          <Feeds />
        </div>
        <div className="hidden md:block w-[350px]">
          <Widgets />
        </div>
      </div>
    </div>
  );
}

export default Index;
