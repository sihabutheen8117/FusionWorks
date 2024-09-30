import React from 'react';
import {Link} from 'react-router-dom'
import image from '../../assets/FW_logo_processed.png'; 

const HomeHeader = () => {
  return (
    <div>
      <div className="container max-w-full flex flex-row justify-between p-4 bg-zinc-950 "> 
        <div className='flex flex-row'>
          <img src={image} alt='fusion works logo' className='w-8 aspect-[1/1] shrink-0' />
          <div className='pl-3 text-2xl font-extrabold tracking-wide text-white'>FusionWorks</div>
        </div>
        <div className='justify-end'>
          <Link className='text-white pr-2 bg-neutral-900' to="/sign/login">Sign in</Link>
          <Link className='text-white bg-neutral-900' to="/sign/register">Register</Link>
        </div>
      </div>
    </div>
  )
}

export default HomeHeader;
