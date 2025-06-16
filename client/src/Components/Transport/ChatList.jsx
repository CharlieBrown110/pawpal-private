import React from 'react'
import SingleChat from './SingleChat'

const ChatList = ({ allChats, userData, postId }) => {
  console.log(allChats)
  return (
    <div className='min-h-[360px] max-h-[360px] overflow-y-scroll scrollbar-hidden flex flex-col-reverse'>
      {[...allChats]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map(singleChat => (
          <SingleChat key={singleChat._id} {...singleChat} userData={userData} />
        ))}
    </div>
  )
}

export default ChatList
