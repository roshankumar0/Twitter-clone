import React from 'react'

const TweetChat = () => {
    return (
        <div className='border-b-[1px]'>
            <div className='flex'>
                <img className=' mr-[12px]  h-[50px] w-[50px] rounded-full cursor-pointer' src="https://scontent.fdbd4-1.fna.fbcdn.net/v/t39.30808-1/311437557_3511691865783889_7021292410858709402_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=JV0mxC0UO5oAX89gbW0&_nc_ht=scontent.fdbd4-1.fna&oh=00_AfB4j_qJiY-6tEbaagnsYS9ZjTev4F3vqNbjaoTeyv3Nzg&oe=646C6B5B" alt="" />
                <textarea name="" id="" cols="10" rows="1" className='flex-1 outline-none py-[12px]' placeholder='What is happening?!' />
            </div>
        </div>
    )
}

export default TweetChat
