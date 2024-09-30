import React from 'react'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div>
        inside the dashboard layout
        <Outlet/>
      
    </div>
  )
}

export default DashboardLayout
