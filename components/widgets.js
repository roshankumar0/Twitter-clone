import Search from './search'
import Trending from './Trending'
const Widgets = () => {
  return (
    <>
      <div className='pt-[12px] pb-[64px] flex flex-col fixed w-[350px]'>
        <div className='z-20'>
          <Search />
        </div>
        <div className=''>
          <Trending />
        </div>

      </div>
    </>
  )
}

export default Widgets
