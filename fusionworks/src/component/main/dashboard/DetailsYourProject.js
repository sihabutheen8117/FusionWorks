import React from 'react'
import { useState } from 'react'


import Action from './detailsOfProject/Action'
import JoinRequest from './detailsOfProject/JoinRequest'
import Members from './detailsOfProject/Members'
import ProjectResources from './detailsOfProject/ProjectResources'


const DetailsYourProject = () => {

  const [option ,setOption] = useState(<Members/>)


  return (
    <div>
      <div className=''>
        <div className=''>
          Subject
        </div>
        <div className='container bg-slate-200'>
          <div className=''>
            <button onClick={()=>{
              setOption(<Members/>)
            }}>members</button>
          </div>
          <div className=''>
            <button onClick={()=>{
                setOption(<JoinRequest/>)
              }}>requests</button>
          </div>
          <div className=''>
            <button onClick={()=>{
                setOption(<Action/>)
              }}>action</button>
          </div>
          <div className=''>
            <button onClick={()=>{
                  setOption(<ProjectResources/>)
                }}>project resources </button>
            </div>

          <div className=''>
            <button>delete</button>
          </div>

        </div>

        {option}
      </div>

      
    </div>
  )
}

export default DetailsYourProject
