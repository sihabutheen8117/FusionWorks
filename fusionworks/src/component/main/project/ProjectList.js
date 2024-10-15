import React from 'react'

const ProjectList = () => {


  return (
    <div>


      <div className='flex flex-col rounded-lg ring-2 ring-cyan-700 max-w-screen-lg lg:ml-48 md:ml-14'>
        
        <div className='flex w-full items-center'>
          <div className='truncate text-white text-2xl font-semibold font-roboto  basis-10/12 lg:basis-19/12 p-2 pl-4'>
            subject wrerethretprehtpwrehtpwhretrehtrehtphe reprpewr qhrpreh qrhqprhq  
          </div>
          <div className='hidden lg:block lg:basis-1/12 text-center text-sky-100'>
           4 <i class="fas fa-users"></i>
          </div>
          <div className='basis-2/12 text-center font-mono text-sky-100 text-opacity-50'>
          1 hour ago
          </div>
        </div>

        {/* Describtion */}

        <div className='bg-gray-700 m-3 pl-3 py-1 rounded-xl text-sky-100 font-medium text-lg'>
          dec
        </div>

      </div>
      
    </div>
  )
}

export default ProjectList
