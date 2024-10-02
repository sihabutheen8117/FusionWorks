import React from 'react'
import { Link } from 'react-router-dom'

const Mainnavigator = () => {
  return (
    <div>
      <div className='container bg-slate-400 max-w-full'>
        <div className="flex flex-col">
            <div className='text-black'>
                <Link to="/main/project">project</Link>
            </div>
            <div className='text-black'>
                <Link to="/main/events">events</Link>
            </div>
            <div className='text-black'>
                <Link to="/main/discussionForum">discussionForum</Link>
            </div>
            <div className='text-black'>
                <Link to="/main/clubs">clubs</Link>
            </div>
            <div className='text-black'>
                <Link to="/main/dashBoard">dashboard</Link>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Mainnavigator
