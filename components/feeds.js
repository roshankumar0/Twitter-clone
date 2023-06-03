import React from 'react'
import Post from './Post'
import { useSelector } from 'react-redux'

const Feeds = () => {
  const { tweet } = useSelector((state) => state.names)
  return (
    <div className=' border-b-8  '>
      <div className='border-r-[11px]'>
        <Post color='#1D9BF0' post={`https://i.pinimg.com/550x/db/5c/17/db5c177111ffc115c88cec8a0121411f.jpg`} profile={`https://scontent.fdbd4-1.fna.fbcdn.net/v/t39.30808-6/274097282_3116083235339488_1604350482876585176_n.jpg?stp=c62.0.160.160a_dst-jpg_p160x160&_nc_cat=107&ccb=1-7&_nc_sid=574b62&_nc_ohc=u4W2eg-QKdQAX_LWcDU&_nc_ht=scontent.fdbd4-1.fna&oh=00_AfBtRROy6Zz_0OfSsqFmtml0bvCJaRCIy38KC7nqUngDUA&oe=646D5196`} taguser={`roshan`} username={`shiva`} time={`22 Days`} message={`22K`} share={`243k`} likes={`24M`} views={`43K`} />
        <Post color='#536471' post={`https://i.pinimg.com/550x/db/5c/17/db5c177111ffc115c88cec8a0121411f.jpg`} profile={`https://scontent.fdbd4-1.fna.fbcdn.net/v/t39.30808-6/274097282_3116083235339488_1604350482876585176_n.jpg?stp=c62.0.160.160a_dst-jpg_p160x160&_nc_cat=107&ccb=1-7&_nc_sid=574b62&_nc_ohc=u4W2eg-QKdQAX_LWcDU&_nc_ht=scontent.fdbd4-1.fna&oh=00_AfBtRROy6Zz_0OfSsqFmtml0bvCJaRCIy38KC7nqUngDUA&oe=646D5196`} taguser={`roshan`} username={`shiva`} time={`22 Days`} message={`22K`} share={`243k`} likes={`24M`} views={`43K`} />
        <Post color='' post={`https://i.pinimg.com/550x/db/5c/17/db5c177111ffc115c88cec8a0121411f.jpg`} profile={`https://scontent.fdbd4-1.fna.fbcdn.net/v/t39.30808-6/274097282_3116083235339488_1604350482876585176_n.jpg?stp=c62.0.160.160a_dst-jpg_p160x160&_nc_cat=107&ccb=1-7&_nc_sid=574b62&_nc_ohc=u4W2eg-QKdQAX_LWcDU&_nc_ht=scontent.fdbd4-1.fna&oh=00_AfBtRROy6Zz_0OfSsqFmtml0bvCJaRCIy38KC7nqUngDUA&oe=646D5196`} taguser={`roshan`} username={`shiva`} time={`22 Days`} message={`22K`} share={`243k`} likes={`24M`} views={`43K`} />
        <Post color='' post={`https://i.pinimg.com/550x/db/5c/17/db5c177111ffc115c88cec8a0121411f.jpg`} profile={`https://scontent.fdbd4-1.fna.fbcdn.net/v/t39.30808-6/274097282_3116083235339488_1604350482876585176_n.jpg?stp=c62.0.160.160a_dst-jpg_p160x160&_nc_cat=107&ccb=1-7&_nc_sid=574b62&_nc_ohc=u4W2eg-QKdQAX_LWcDU&_nc_ht=scontent.fdbd4-1.fna&oh=00_AfBtRROy6Zz_0OfSsqFmtml0bvCJaRCIy38KC7nqUngDUA&oe=646D5196`} taguser={`roshan`} username={`shiva`} time={`22 Days`} message={`22K`} share={`243k`} likes={`24M`} views={`43K`} />
        <Post color='' post={`https://i.pinimg.com/550x/db/5c/17/db5c177111ffc115c88cec8a0121411f.jpg`} profile={`https://scontent.fdbd4-1.fna.fbcdn.net/v/t39.30808-6/274097282_3116083235339488_1604350482876585176_n.jpg?stp=c62.0.160.160a_dst-jpg_p160x160&_nc_cat=107&ccb=1-7&_nc_sid=574b62&_nc_ohc=u4W2eg-QKdQAX_LWcDU&_nc_ht=scontent.fdbd4-1.fna&oh=00_AfBtRROy6Zz_0OfSsqFmtml0bvCJaRCIy38KC7nqUngDUA&oe=646D5196`} taguser={`roshan`} username={`shiva`} time={`22 Days`} message={`22K`} share={`243k`} likes={`24M`} views={`43K`} />

      </div>
    </div>
  )
}

export default Feeds
