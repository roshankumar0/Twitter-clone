import React from 'react'
import Header from './Header'
import TweetChat from './TweetChat'
import Post from './Post'

const Feeds = () => {
  return (
    <div className='  max-w-[600px] w-[600px] '>
      <Header />
      <TweetChat />
      <div className='border-r-[1px]'>
        <Post post={`https://scontent.fdbd4-1.fna.fbcdn.net/v/t39.30808-1/335495798_3487548471477198_1701993653449627874_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f67be1&_nc_ohc=JPI7-xi6lxIAX8i9DS8&_nc_ht=scontent.fdbd4-1.fna&oh=00_AfBJ_AweQw1EeKecOjWlPAh7ZvQDmZUOa-OqGT3loTJpBQ&oe=646E411Ahttps://scontent.fdbd4-1.fna.fbcdn.net/v/t39.30808-1/335495798_3487548471477198_1701993653449627874_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f67be1&_nc_ohc=JPI7-xi6lxIAX8i9DS8&_nc_ht=scontent.fdbd4-1.fna&oh=00_AfBJ_AweQw1EeKecOjWlPAh7ZvQDmZUOa-OqGT3loTJpBQ&oe=646E411A`} profile={`https://scontent.fdbd4-1.fna.fbcdn.net/v/t39.30808-6/274097282_3116083235339488_1604350482876585176_n.jpg?stp=c62.0.160.160a_dst-jpg_p160x160&_nc_cat=107&ccb=1-7&_nc_sid=574b62&_nc_ohc=u4W2eg-QKdQAX_LWcDU&_nc_ht=scontent.fdbd4-1.fna&oh=00_AfBtRROy6Zz_0OfSsqFmtml0bvCJaRCIy38KC7nqUngDUA&oe=646D5196`} taguser={`roshan`} username={`shiva`} time={`22 Days`} message={`22K`} share={`243k`} likes={`24M`} views={`43K`} />
        <Post post={`https://scontent.fdbd4-1.fna.fbcdn.net/v/t39.30808-1/265380064_1038499456991006_7914972285840259323_n.jpg?stp=c0.0.240.240a_dst-jpg_p240x240&_nc_cat=100&ccb=1-7&_nc_sid=aa3c98&_nc_ohc=M8wlyZiN--YAX9F2Ud1&_nc_oc=AQmIZgVMVElrmfAgin1PDmqqaDaT7b73x-zbdaqIrYIlzrF7MgbPrjCC-4Rpwg909Ek&_nc_ht=scontent.fdbd4-1.fna&oh=00_AfDhOQphf1m-4CC7G2jTfcXwX8pEOzTBNZEJ3QQuf-mrzQ&oe=646D9EAB`} profile={`https://tse1.mm.bing.net/th?id=OIP.vpENuVG6_Ke79c0shGAHMQHaFn&pid=Api&rs=1&c=1&qlt=95&w=144&h=109`} taguser={`sohan`} username={`shivam`} time={`24 Days`} message={`32K`} share={`243k`} likes={`72M`} views={`3K`} />
        <Post post={`https://scontent.fdbd4-1.fna.fbcdn.net/v/t39.30808-1/265380064_1038499456991006_7914972285840259323_n.jpg?stp=c0.0.240.240a_dst-jpg_p240x240&_nc_cat=100&ccb=1-7&_nc_sid=aa3c98&_nc_ohc=M8wlyZiN--YAX9F2Ud1&_nc_oc=AQmIZgVMVElrmfAgin1PDmqqaDaT7b73x-zbdaqIrYIlzrF7MgbPrjCC-4Rpwg909Ek&_nc_ht=scontent.fdbd4-1.fna&oh=00_AfDhOQphf1m-4CC7G2jTfcXwX8pEOzTBNZEJ3QQuf-mrzQ&oe=646D9EAB`} profile={``} taguser={`navneet`} username={`karan`} time={`28 Days`} message={`62K`} share={`123k`} likes={`27M`} views={`40K`} />

      </div>
    </div>
  )
}

export default Feeds
