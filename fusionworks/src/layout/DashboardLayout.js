import React from 'react'
import { Outlet , Link} from 'react-router-dom'
import { useState } from 'react'

const DashboardLayout = () => {


  return (
    <div>
        <div className=''>
          <div className='flex flex-row gap-4'>
            <div className='border border-2 border-cyan-400 rounded-full p-1 px-2 font-semibold text-sky-200 hover:bg-slate-700'>
              <Link to="/main/dashBoard/yourProject" >Your projects</Link>
            </div>
            <div className='border border-2 border-cyan-400 rounded-full p-1 px-2 font-semibold text-sky-200 hover:bg-slate-700'>
              <Link to="/main/dashBoard/applied">applied</Link>
            </div>
          </div>
        </div>
        <Outlet/>
      
    </div>
  )
}

export default DashboardLayout
