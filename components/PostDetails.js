import React from 'react';

const PostDetails = ({ Icon, message, color,likes }) => {
  return (
    <div className={`flex items-center justify-between text-color ${color ? `hover:bg-${color}` : ''}`}>
      <Icon />
      <h4 className='px-[12px]'>{message}</h4>
      <h2>{likes}</h2>
    </div>
  );
};

export default PostDetails;
