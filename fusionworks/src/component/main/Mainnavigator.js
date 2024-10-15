import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const Mainnavigator = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [option ,setOption] = useState('')

  return (
    <div>
      <div className=''>
        {/* <div className="flex flex-col">
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

        </div> */}
    <nav className=" text-white">
      <div className=" flex flex-col justify-between p-2">
        {/* Logo or Brand Name */}

        {/* Hamburger Menu Icon for mobile */}
        <div className="md:hidden ">
          <div className='flex flex-row gap-2'>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <i className="fas fa-times h-6 w-6"></i> // Close icon
              ) : (
                <i className="fas fa-bars h-6 w-6"></i> // Hamburger icon
              )}
            </button>
            <div className='text-white'>
            {option === "" ? "" : `> ${option}`}
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className={`md:flex md:flex-col md:w-56 md:h-screen ${isOpen ? '' : 'hidden'} bg-cyan-950`}>
          <a  className="block px-4 py-2 hover:bg-gray-700 hover:rounded-full md:mx-1" 
            onClick={()=>{
              setIsOpen(false)
              setOption("Home")
            }}
          >Home</a>
          <a  className="block px-4 py-2 hover:bg-gray-700 hover:rounded-full md:mx-2"
            onClick={()=>{
              setIsOpen(false)
              setOption("Home")
            }}
          >About</a>
          <a  className="block px-4 py-2 hover:bg-gray-700 hover:rounded-full md:mx-2"
            onClick={()=>{
              setIsOpen(false)
              setOption("Home")
            }}
          >Services</a>
          <a  className="block px-4 py-2 hover:bg-gray-700 hover:rounded-full md:mx-2"
            onClick={()=>{
              setIsOpen(false)
              setOption("Home")
            }}
          >Contact</a>
        </div>
      </div>
    </nav>


      </div>
    </div>
  )
}

export default Mainnavigator
