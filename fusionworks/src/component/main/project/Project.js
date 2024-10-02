import React from 'react'
import ProjectList from './ProjectList.js'
import { useState } from 'react'


const Project = () => {


  const [search ,setSearch] = useState("")
  const [filter,setFilter]  = useState("recent")


  return (
    <div>
      <div className='container'>

        <div className='container flex flex-row'>
          <input type="text" 
          placeholder = "search"
          onChange={(event)=>{
            setSearch(event.target.value)
          }}
          className='border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none px-2 py-1'
          />
          <select value={filter} 
          onChange={(event)=>{
            setFilter(event.target.value)
          }}>
            <option value="old">old</option>
            <option value="recent">recent</option>
          </select>
        </div>

        
        <ProjectList/>

        {/* for adding the project for their own */}
        <div className=''>
        </div>
      </div>
    </div>
  )
}

export default Project
