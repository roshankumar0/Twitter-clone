import React from 'react'
import Post from './Post'
import { useSelector } from 'react-redux'

const Feeds = () => {
  const { tweet } = useSelector((state) => state.names)
  return (
    <div>
      <div className=' '>
        <Post color='#1D9BF0' post={`https://i.pinimg.com/550x/db/5c/17/db5c177111ffc115c88cec8a0121411f.jpg`} profile={`https://tse2.mm.bing.net/th?id=OIP.IxheWOxIH3MVVcUKPDJwtgHaD4&pid=Api&P=0&h=180        
        `} taguser={`roshan`} username={`shiva`} time={`22 Days`} message={`22K`} share={`243k`} likes={`24M`} views={`43K`} />
        <Post color='#1D9BF0' post={`https://i.pinimg.com/550x/db/5c/17/db5c177111ffc115c88cec8a0121411f.jpg`} profile={`https://tse2.mm.bing.net/th?id=OIP.IxheWOxIH3MVVcUKPDJwtgHaD4&pid=Api&P=0&h=180        
        `} taguser={`roshan`} username={`shiva`} time={`22 Days`} message={`22K`} share={`243k`} likes={`24M`} views={`43K`} />
        <Post color='#1D9BF0' post={`https://i.pinimg.com/550x/db/5c/17/db5c177111ffc115c88cec8a0121411f.jpg`} profile={`https://tse2.mm.bing.net/th?id=OIP.IxheWOxIH3MVVcUKPDJwtgHaD4&pid=Api&P=0&h=180        
        `} taguser={`roshan`} username={`shiva`} time={`22 Days`} message={`22K`} share={`243k`} likes={`24M`} views={`43K`} />
        <Post color='#1D9BF0' post={`https://i.pinimg.com/550x/db/5c/17/db5c177111ffc115c88cec8a0121411f.jpg`} profile={`https://tse2.mm.bing.net/th?id=OIP.IxheWOxIH3MVVcUKPDJwtgHaD4&pid=Api&P=0&h=180        
        `} taguser={`roshan`} username={`shiva`} time={`22 Days`} message={`22K`} share={`243k`} likes={`24M`} views={`43K`} />
        <Post color='#1D9BF0' post={`https://i.pinimg.com/550x/db/5c/17/db5c177111ffc115c88cec8a0121411f.jpg`} profile={`https://tse2.mm.bing.net/th?id=OIP.IxheWOxIH3MVVcUKPDJwtgHaD4&pid=Api&P=0&h=180        
        `} taguser={`roshan`} username={`shiva`} time={`22 Days`} message={`22K`} share={`243k`} likes={`24M`} views={`43K`} />
        <Post color='#1D9BF0' post={`https://i.pinimg.com/550x/db/5c/17/db5c177111ffc115c88cec8a0121411f.jpg`} profile={`https://tse2.mm.bing.net/th?id=OIP.IxheWOxIH3MVVcUKPDJwtgHaD4&pid=Api&P=0&h=180        
        `} taguser={`roshan`} username={`shiva`} time={`22 Days`} message={`22K`} share={`243k`} likes={`24M`} views={`43K`} />
        <Post color='#1D9BF0' post={`https://i.pinimg.com/550x/db/5c/17/db5c177111ffc115c88cec8a0121411f.jpg`} profile={`https://tse2.mm.bing.net/th?id=OIP.IxheWOxIH3MVVcUKPDJwtgHaD4&pid=Api&P=0&h=180        
        `} taguser={`roshan`} username={`shiva`} time={`22 Days`} message={`22K`} share={`243k`} likes={`24M`} views={`43K`} />

      </div>
    </div>
  )
}

export default Feeds
