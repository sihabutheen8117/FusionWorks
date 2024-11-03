import React from 'react'
import { useState } from 'react'
import { formatDistanceToNow } from 'date-fns'

const ProjectList = ({data}) => {

  const [lineClamp ,setLineClamp] =useState(true)

  const toggleMore = () =>{
    setLineClamp(!lineClamp)
  }

  // Testin member

  const members = data.members.details;

  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  // Testing member


  return (
    <div>


      <div className='flex flex-col rounded-lg ring-2 ring-cyan-700 md:w-full md:m-0 m-2'>

        <div>
            <div className=" text-sky-200 flex flex-row font-medium items-center mt-2 ml-3 justify-between">

              <div className='flex flex-row'>
                <div className='w-7 h-7 bg-white rounded-full'>

                </div>
                <div className='font-bold ml-2 text-lg'>
                  {data.creator.name}
                </div>
              </div>

              <div className='flex flex-row gap-4'>
                <div className='text-center text-sky-100'>
                {data.person_needed} <i class="fas fa-users"></i>
                </div>

                <div className=' text-center font-mono text-sky-100 text-opacity-50 mr-3'>
                  { formatDistanceToNow(new Date(data.createdAt) ,{ addSuffix:true}) }
                </div>
              </div>
            </div>
        </div>
        
        <div className='flex w-full items-center'>
          <div className={`${lineClamp ? 'truncate' :''}  text-white text-2xl font-semibold font-roboto  p-2 pl-4`}>
            {data.subject}
          </div>
          
          
        </div>

        {/* Describtion */}

        <div className={`overflow-hidden text-ellipsis ${lineClamp ? 'line-clamp-3' :''}  bg-gray-700 m-3 pl-3 py-1 rounded-xl text-sky-100 font-medium text-lg`}>
        {data.describtion}
        </div>

        <div className='flex flex-row justify-around mb-2 ml-4 mt-1'>

          {/* <div className="text-sky-200 text-lg flex items-center font-medium">
            Members 
          </div> */}


          {/* Testin member */}

          <div className="relative">
      <button onClick={toggleCart} className=" text-sky-200 p-2 rounded">
        members  {members.length} <i class="fas fa-users"></i>
      </button>

      {/* Dropdown Cart Members */}
      <div
        className={`absolute left-0 mt-2 w-64 bg-white shadow-lg rounded transition-transform transform ${
          isOpen ? 'translate-y-0' : 'hidden'
        }`}
        style={{ transition: 'transform 0.3s ease-in-out' }}
      >
        <h2 className="text-lg font-bold p-2">Members</h2>
        <ul className="p-2">
          {members.map((member, index) => (
            <li key={index} className="py-1 border-b last:border-b-0">
              {member.name}
            </li>
          ))}
        </ul>
       
      </div>
    </div>



          {/* Testing member */}

          <div className='text-sky-200 text-lg flex items-center font-medium'>
            <button 
              onClick={
                toggleMore
              }
            >
              {lineClamp ? <>
                more <i class="fas fa-angle-down"></i>
              </> : <>
                less <i class="fas fa-angle-up"></i>
              </>}
              
              
            </button>
          </div>

          <div className="text-white font-mono text-xl font-bold">
            <button className='bg-green-500 rounded-full p-1 px-4 hover:bg-green-600'>Apply</button>
          </div>

        </div>

      </div>
      
    </div>
  )
}

export default ProjectList
