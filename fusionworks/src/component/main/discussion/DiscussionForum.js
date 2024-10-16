import React from 'react'
import DiscussionList from './DiscussionList'

const DiscussionForum = () => {
  return (
    <div className='mt-2'>
      <div className='w-full flex flex-col gap-4'>
        <DiscussionList you={false}/> 
        <DiscussionList you={true}/> 
        <DiscussionList you={false}/> 
      </div>
    </div>
  )
}

export default DiscussionForum
