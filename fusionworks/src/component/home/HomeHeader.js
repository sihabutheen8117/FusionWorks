import React from 'react';
import {Link} from 'react-router-dom'
import image from '../../assets/FW_logo_processed.png'; 

const HomeHeader = () => {
  return (
    <div>
      <div className="conatiner flex flex-row justify-between p-3 "> 
        <div className='flex flex-row'>
          <img src={image} alt='fusion works logo' className='w-11' />
          <div className='font-bold font-mono text-3xl antialiased  tracking-tight pl-3 text-white'>FusionWorks</div>
        </div>
        <div className=' bg-rose-600 hover:bg-rose-400 rounded-full w-20 h-8 flex items-center justify-center shadow-lg'>
          <Link className='font-roboto font-bold text-white ' to="/sign/login">Sign in</Link>
        </div>
      </div>
    </div>
  )
}

export default HomeHeader;
