import React from 'react'
import { useState } from 'react'

const ProjectList = () => {

  const [lineClamp ,setLineClamp] =useState(true)

  const toggleMore = () =>{
    setLineClamp(!lineClamp)
  }

  // Testin member

  const members = [
    { name: 'Member 1' },
    { name: 'Member 2' },
    { name: 'Member 3' },
    { name: 'Member 4' },
    { name: 'Member 5' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  // Testing member


  return (
    <div>


      <div className='flex flex-col rounded-lg ring-2 ring-cyan-700 md:w-full w-[29rem] '>

        <div>
            <div className=" text-sky-200 flex flex-row font-medium items-center mt-2 ml-3 justify-between">

              <div className='flex flex-row'>
                <div className='w-7 h-7 bg-white rounded-full'>

                </div>
                <div className='font-bold ml-2 text-lg'>
                  Sihabutheen Haq
                </div>
              </div>

              <div className='flex flex-row gap-4'>
                <div className='text-center text-sky-100'>
                4 <i class="fas fa-users"></i>
                </div>

                <div className=' text-center font-mono text-sky-100 text-opacity-50 mr-3'>
                  1 hour ago
                </div>
              </div>
            </div>
        </div>
        
        <div className='flex w-full items-center'>
          <div className={`${lineClamp ? 'truncate' :''}  text-white text-2xl font-semibold font-roboto  p-2 pl-4`}>
            subject wrerethretprehtpwrehtpwhretrehtrehtphe reprpewr qhrpreh qrhqprhq  eferferfref erferfrefre feferferfref erfeferfer
          </div>
          
          
        </div>

        {/* Describtion */}

        <div className={`overflow-hidden text-ellipsis ${lineClamp ? 'line-clamp-3' :''}  bg-gray-700 m-3 pl-3 py-1 rounded-xl text-sky-100 font-medium text-lg`}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
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
