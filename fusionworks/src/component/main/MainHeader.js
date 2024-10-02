import React from 'react'
import { Link } from 'react-router-dom'

const MainHeader = () => {
  return (
    <div>
      <div className='container h-10 max-w-full bg-slate-800'>
        <div className='flex felx-row justify-between'>
            <div className='text-white'>
                FusionWorks
            </div>
            <div className="text-white">
                <Link to="/main/profile">profile</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MainHeader
