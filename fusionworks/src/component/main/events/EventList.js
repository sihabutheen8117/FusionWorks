import React from 'react'
import { useState } from 'react'

const EventList = () => {
    const [lineClamp ,setLineClamp] =useState(true)

    const toggleMore = () =>{
      setLineClamp(!lineClamp)
    }
  
  
  
    return (
      <div>
  
  
        <div className='flex flex-col rounded-lg ring-2 ring-cyan-700 md:w-full w-[29rem] '>
  
          <div>
              <div className=" text-sky-200 flex flex-row font-medium items-center mt-2 ml-3 justify-between">
  
                <div className='flex flex-row'>
                  <div className='w-8 h-8 bg-white rounded-full'>
  
                  </div>
                  <div className='font-bold ml-2 text-lg'>
                    Club Name
                  </div>
                </div>
  
                <div className='flex flex-row gap-3'>
                  <div className=''>
                  <i className="fas fa-calendar-alt mr-1"></i> date
                  </div>
                  <div className=' text-center font-mono text-sky-100 text-opacity-50 mr-3 ml-4'>
                    1 hour ago
                  </div>
                </div>
              </div>
          </div>
          
          <div className='flex w-full items-center'>
            <div className={`${lineClamp ? 'truncate' :''}  text-white text-2xl font-semibold font-roboto  p-2 pl-4 w-9/12`}>
              subject wrerethretprehtpwrehtpwhretrehtrehtphe reprpewr qhrpreh qrhqprhq  eferferfref erferfrefre feferferfref erfeferfer
            </div>

            <div className=' text-sky-200 tracking-tight text-xl font-bold font-mono text-center w-3/12'>
                Event Type 
            </div>
            
            
          </div>
  
          {/* Describtion */}
  
          <div className={`overflow-hidden text-ellipsis ${lineClamp ? 'line-clamp-3' :''}  bg-gray-700 m-3 pl-3 py-1 rounded-xl text-sky-100 font-medium text-lg`}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          </div>
  
          <div className='flex flex-row justify-around mb-2 ml-4 mt-1'>

            <div className='flex flex-row text-sky-200 font-medium'>
                Close on : 
                <div className='ml-2'> 
                    date
                </div> 
            </div>
  
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

export default EventList
