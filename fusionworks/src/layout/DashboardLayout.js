import React from 'react'
import { Outlet , Link} from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div>
        <div className='container max-w-full bg-slate-300'>
          <div className='flex flex-col'>
            <div className=''>
              <Link to="/main/dashBoard/yourProject">Your projects</Link>
            </div>
            <div className=''>
              <Link to="/main/dashBoard/applied">applied</Link>
            </div>
          </div>
        </div>
        <Outlet/>
      
    </div>
  )
}

export default DashboardLayout
