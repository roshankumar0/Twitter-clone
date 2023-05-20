import React from 'react'
import Sidebar from '../components/sidebar'
import Feeds from '../components/feeds'
import Widgets from '../components/widgets'

function index() {
  return (
    <div className='max-w-[1300px] m-auto flex h-[100vh]'>
      <Sidebar />
      <div className='flex flex-1 scrollable-containers'>
      <Feeds />
      <Widgets />
      </div>
    </div>
  )
}

export default index
