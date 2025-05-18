import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Mainnavigator = () => {
  const nav = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [option ,setOption] = useState('Project')

  const onLogOut = () => {
    localStorage.removeItem('userLog');
    nav("/");
  }

  return (
    <div>
      <div className=''>
      
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
        <div className={`md:flex md:flex-col md:w-44 md:h-screen ${isOpen ? '' : 'hidden'} bg-[#101B35] md:border-r-4 md:border-cyan-400 md:shadow-[3px_0_10px_-5px_rgba(22,217,214,0.7)]`}>
          <div  className={`block px-4 py-2 hover:border-cyan-300 hover:shadow-[0px_3px_10px_-7px_rgba(22,217,214,0.7)] md:mx-1 border-b-2  ${option == "Project" ? 'border-cyan-300':'border-slate-700'}`}
            onClick={()=>{
              setIsOpen(false)
              setOption("Project")
            }}
          >
            <Link to="/main/project">Project</Link>
          </div>
          <div  className={`block px-4 py-2 hover:border-cyan-300 hover:shadow-[0px_3px_10px_-7px_rgba(22,217,214,0.7)] md:mx-1 border-b-2  ${option == "Events" ? 'border-cyan-300':'border-slate-700'}`}
            onClick={()=>{
              setIsOpen(false)
              setOption("Events")
            }}
          >
            <Link to="/main/events">Events</Link>
          </div>
          <div  className={`block px-4 py-2 hover:border-cyan-300 hover:shadow-[0px_3px_10px_-7px_rgba(22,217,214,0.7)] md:mx-1 border-b-2   ${option === "DiscussionForum" ? "border-cyan-300":'border-slate-700'}`}
            onClick={()=>{
              setIsOpen(false)
              setOption("DiscussionForum")
            }}
          >
            <Link to="/main/discussionForum">DiscussionForum</Link>
          </div>

          <div  className={`block px-4 py-2 hover:border-cyan-300 hover:shadow-[0px_3px_10px_-7px_rgba(22,217,214,0.7)] md:mx-1 border-b-2  ${option == "Clubs" ? 'border-cyan-300':'border-slate-700'}`}
            onClick={()=>{
              setIsOpen(false)
              setOption("Clubs")
            }}
          >
            <Link to="/main/clubs">Clubs</Link>
          </div>

          <div  className={`block px-4 py-2 hover:border-cyan-300 hover:shadow-[0px_3px_10px_-7px_rgba(22,217,214,0.7)] md:mx-1 border-b-2  ${option == "Dashboard" ? 'border-cyan-300':'border-slate-700'}`}
            onClick={()=>{
              setIsOpen(false)
              setOption("Dashboard")
            }}
          >
            <Link to="/main/dashBoard">Dashboard</Link>
          </div>

          <div className='flex justify-center'>
            <button className='bg-red-500 hover:bg-red-600 text-white rounded-lg px-7 mt-4 py-1 flex justify-center text-lg font-semibold' 
            onClick={onLogOut}
            >
              Log out
            </button>
          </div>
          
        </div>

      </div>
    </nav>


      </div>
    </div>
  )
}

export default Mainnavigator
