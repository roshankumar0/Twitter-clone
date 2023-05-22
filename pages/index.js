import React from 'react'
import Sidebar from '../components/sidebar'
import Feeds from '../components/feeds'
import Widgets from '../components/widgets'

function index() {
  return (
    <div className='max-w-[1300px] m-auto flex h-[100vh]'>
      <div className='flex flex-1 overflow-y-scroll w-[990px] justify-evenly'>
        <Feeds />
        <Widgets />
      </div>
    </div>
  )
}

export default index
