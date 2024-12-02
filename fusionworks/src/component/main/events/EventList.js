import React from 'react'
import { useState } from 'react'
import { formatDistanceToNow } from 'date-fns'

const EventList = ({data}) => {

    const [lineClamp ,setLineClamp] =useState(true)

    const toggleMore = () =>{
      setLineClamp(!lineClamp)
    }
  
  
  
    return (
      <div>
  
  {/* flex flex-col rounded-lg ring-2 ring-cyan-700 md:w-full w-[29rem]  */}
        <div className='flex flex-col rounded-lg ring-2 ring-cyan-700 md:w-full md:m-0 m-2 '>
  
          <div>
              <div className=" text-sky-200 flex flex-row font-medium items-center mt-2 ml-3 justify-between">
  
                <div className='flex flex-row'>
                  <div className='w-8 h-8 bg-white rounded-full'>
  
                  </div>
                  <div className='font-bold ml-2 text-lg'>
                    {data.creator.name}
                  </div>
                </div>
  
                <div className='flex flex-row gap-3'>
                  {
                    data.event_date ? 
                    <div className=''>
                  <i className="fas fa-calendar-alt mr-1"></i> date
                  </div> : ""
                  }
                  <div className=' text-center font-mono text-sky-100 text-opacity-50 mr-3 ml-4'>
                    { formatDistanceToNow(new Date(data.createdAt) ,{ addSuffix:true}) }
                  </div>
                </div>
              </div>
          </div>
          
          <div className='flex w-full items-center'>
            <div className={`${lineClamp ? 'truncate' :''}  text-white text-2xl font-semibold font-roboto  p-2 pl-4 w-9/12`}>
              {data.title}
            </div>

            <div className=' text-sky-200 tracking-tight text-xl font-bold font-mono text-center w-3/12'>
              {data.type_of_event}
            </div>
            
            
          </div>
  
          {/* Describtion */}
  
          <div className={`overflow-hidden text-ellipsis ${lineClamp ? 'line-clamp-3' :''}  bg-gray-700 m-3 pl-3 py-1 rounded-xl text-sky-100 font-medium text-lg`}>
            {data.describtion}
          </div>
  
          <div className='flex flex-row justify-around mb-2 ml-4 mt-1'>

            <div className='flex flex-row text-sky-200 font-medium'>
                Close on : 
                <div className='ml-2'> 
                    {data.last_date_to_apply || "not mentioned" }
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
              <a href={data.apply_form} target='_blank' className='bg-green-500 rounded-full p-1 py-2 px-4 hover:bg-green-600'>Apply</a>
            </div>
  
          </div>

        
  
        </div>
        
      </div>
    )
}

export default EventList
