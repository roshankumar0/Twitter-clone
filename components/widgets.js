import Search from './search'
import Trending from './Trending'
const Widgets = () => {
  return (
    <>
      <div className=' '>
       <div className='pt-[12px] pb-[64px] flex flex-col'>
       <div className='z-20'>
          <Search />
        </div>
        <div className=''>
          <Trending />
        </div>
       </div>

      </div>
    </>
  )
}

export default Widgets
