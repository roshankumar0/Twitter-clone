import React from 'react';

const PostDetails = ({ Icon, message, color }) => {
  return (
    <div className={`flex items-center justify-between text-color ${color ? `hover:bg-${color}` : ''}`}>
      <Icon />
      <h4 className='px-[12px]'>{message}</h4>
    </div>
  );
};

export default PostDetails;
