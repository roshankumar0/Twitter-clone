import React from 'react'
import TweetChat from './TweetChat'
import Post from './Post'

const Feeds = () => {
  return (
    <div className='  max-w-[600px] w-[600px] '>
      <TweetChat />
      <div className='border-r-[1px]'>
        <Post post={`https://scontent.fdbd4-1.fna.fbcdn.net/v/t39.30808-1/335495798_3487548471477198_1701993653449627874_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f67be1&_nc_ohc=JPI7-xi6lxIAX8i9DS8&_nc_ht=scontent.fdbd4-1.fna&oh=00_AfBJ_AweQw1EeKecOjWlPAh7ZvQDmZUOa-OqGT3loTJpBQ&oe=646E411Ahttps://scontent.fdbd4-1.fna.fbcdn.net/v/t39.30808-1/335495798_3487548471477198_1701993653449627874_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f67be1&_nc_ohc=JPI7-xi6lxIAX8i9DS8&_nc_ht=scontent.fdbd4-1.fna&oh=00_AfBJ_AweQw1EeKecOjWlPAh7ZvQDmZUOa-OqGT3loTJpBQ&oe=646E411A`} profile={`https://scontent.fdbd4-1.fna.fbcdn.net/v/t39.30808-6/274097282_3116083235339488_1604350482876585176_n.jpg?stp=c62.0.160.160a_dst-jpg_p160x160&_nc_cat=107&ccb=1-7&_nc_sid=574b62&_nc_ohc=u4W2eg-QKdQAX_LWcDU&_nc_ht=scontent.fdbd4-1.fna&oh=00_AfBtRROy6Zz_0OfSsqFmtml0bvCJaRCIy38KC7nqUngDUA&oe=646D5196`} taguser={`roshan`} username={`shiva`} time={`22 Days`} message={`22K`} share={`243k`} likes={`24M`} views={`43K`} />
        <Post post={`https://scontent.fdbd4-1.fna.fbcdn.net/v/t39.30808-1/335495798_3487548471477198_1701993653449627874_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f67be1&_nc_ohc=JPI7-xi6lxIAX8i9DS8&_nc_ht=scontent.fdbd4-1.fna&oh=00_AfBJ_AweQw1EeKecOjWlPAh7ZvQDmZUOa-OqGT3loTJpBQ&oe=646E411Ahttps://scontent.fdbd4-1.fna.fbcdn.net/v/t39.30808-1/335495798_3487548471477198_1701993653449627874_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f67be1&_nc_ohc=JPI7-xi6lxIAX8i9DS8&_nc_ht=scontent.fdbd4-1.fna&oh=00_AfBJ_AweQw1EeKecOjWlPAh7ZvQDmZUOa-OqGT3loTJpBQ&oe=646E411A`} profile={`https://scontent.fdbd4-1.fna.fbcdn.net/v/t39.30808-6/274097282_3116083235339488_1604350482876585176_n.jpg?stp=c62.0.160.160a_dst-jpg_p160x160&_nc_cat=107&ccb=1-7&_nc_sid=574b62&_nc_ohc=u4W2eg-QKdQAX_LWcDU&_nc_ht=scontent.fdbd4-1.fna&oh=00_AfBtRROy6Zz_0OfSsqFmtml0bvCJaRCIy38KC7nqUngDUA&oe=646D5196`} taguser={`roshan`} username={`shiva`} time={`22 Days`} message={`22K`} share={`243k`} likes={`24M`} views={`43K`} />

      </div>
    </div>
  )
}

export default Feeds
