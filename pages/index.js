import React from 'react'
import Sidebar from '../components/sidebar'
import Feeds from '../components/feeds'
import Widgets from '../components/widgets'
import MobileMenu from '../components/MobileMenu'

function index() {
  return (
    <div className='max-w-[1300px] m-auto flex md:h-[100vh] h-[153vh]'>
      <div className='flex flex-1 overflow-y-scroll md:w-[990px] justify-evenly'>
        <div>
          <Feeds />
          {/* <MobileMenu /> */}
        </div>
        <div className='hidden md:block'>
          <Widgets />
        </div>
      </div>
    </div>
  )
}

export default index
