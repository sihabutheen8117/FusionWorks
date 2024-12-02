import React from 'react'
import {useState } from 'react'
import { formatDistanceToNow } from 'date-fns'

const Clubs_view = ({data ,name}) => {



  const [lineClamp ,setLineClamp] =useState(true)

  const toggleMore = () =>{
    setLineClamp(!lineClamp)
  }


  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };



  return (
    <div>


      <div className='flex flex-col rounded-lg ring-2 ring-cyan-700 md:w-full w-[29rem] mb-5'>

        <div>
            <div className=" text-sky-200 flex flex-row font-medium items-center mt-2 ml-3 justify-between">

              <div className='flex flex-row'>
                <div className='w-7 h-7 bg-white rounded-full'>

                </div>
                <div className='font-bold ml-2 text-lg'>
                  {name}
                </div>
              </div>

              <div className='flex flex-row gap-4'>

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
         {data.details}
        </div>

        
        <div className={`${lineClamp ? 'hidden' : ""} pl-3`}>
          {
            data.links.map((link , index)=>(
              <div key={index} className="flex flex-row gap-2">
                <div className="text-sky-200 font-semibold">
                  {link.link_name} :
                </div>
                <a 
                className='text-sky-400'
                href={`${link.link_address}`} target="_blank">
                  {link.link_address}
                </a> 
              </div>
            ))
          }
        </div>

        <div className='flex flex-row justify-around mb-2 ml-4 mt-1'>
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

       

        </div>

      </div>
      
    </div>
  )
}

export default Clubs_view
