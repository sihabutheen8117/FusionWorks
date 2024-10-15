import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/FW_logo_processed.png'; 

const MainHeader = () => {
  return (
    <div>
      <div className='border-b-2 border-cyan-300'>
        <div className='flex felx-row justify-between'>
            <div className='flex flex-row m-3 items-center'>
              <img src={image} alt='fusion works logo' className='w-10' />
              <div className='font-bold font-mono text-2xl antialiased  tracking-tight pl-3 text-white'>FusionWorks</div>
            </div>
            <div className="text-white m-3 flex flex-row items-center">
                <div className='hidden sm:block font-semibold mr-3'>
                  {/* Profile name */}
                  Sihabutheen Haq
                </div>
                <Link to="/main/profile">
                    <div className='w-10 h-10 rounded-full bg-slate-50 '>
                      {/* profile image */}
                    </div>
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MainHeader
