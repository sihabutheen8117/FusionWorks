import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'


const ProfileLayout = () => {
  return (
    <div>
      <div className='conatiner bg-slate-300'>
        <div className='flex flex-col'>
          <div className=''>
            <Link to="/main/profile/profile">profile</Link>
          </div>
          <div className=''>
            <Link to="/main/profile/changePassword">change password</Link>
          </div>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default ProfileLayout
