import React from 'react'
import { Outlet } from 'react-router-dom'


const ProfileLayout = () => {
  return (
    <div>
      inside profileLayout
      <Outlet/>
    </div>
  )
}

export default ProfileLayout
