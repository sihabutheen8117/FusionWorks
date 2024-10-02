import React from 'react'

const ProjectList = () => {


  return (
    <div>

      <div className='container'>
        <div className='grid grid-cols-12 gap-3'>
          <div className='col-span-8 text-white bg-slate-600'>subject</div>
          <div className='col-span-2 text-white bg-slate-600'>person</div>
          <div className='col-span-2 text-white bg-slate-600'>time ago</div>
        </div>
        <div className='grid grid-cols-12 gap-3'>
          <div className='col-span-12 text-white bg-slate-600'>describtion</div>
        </div>
        <div className="grid grid-cols-12 gap-3">
          <div className='col-span-1 text-white bg-slate-600'>by
          </div>
          <div className='col-span-3 text-white bg-slate-600'>sihabutheen</div>
          <div className='col-span-2 text-white bg-slate-600'>members</div>
          <div className='col-span-2 text-white bg-slate-600'> 5 member</div>
          <div className='col-span-2 text-white bg-slate-600'></div>
          <div className='col-span-2 text-white bg-slate-600'>apply</div>
        </div>
      </div>
      
      inside the project list
    </div>
  )
}

export default ProjectList
