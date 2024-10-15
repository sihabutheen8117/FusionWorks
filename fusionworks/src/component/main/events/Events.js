import React from 'react'
import EventList from './EventList'
import { useState } from 'react'

const Events = () => {
  const [search ,setSearch] = useState("")
  const [filter,setFilter]  = useState("recent")


  return (
    <div>
      <div className=''>

        <div className='flex flex-row mb-4 items-center'>
          <div className='md:ml-10 ml-3 relative '>
            <input type="text" 
            placeholder = "search..."
            onChange={(event)=>{
              setSearch(event.target.value)
            }}
            className='h-10 text-white w-[17rem] md:w-[34rem] border border-gray-300 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring focus:ring-blue-500 bg-[#142347]'
            />
            <span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <i class="fas fa-search text-gray-500"></i>
            </span>
          </div>
          <select value={filter} 
          onChange={(event)=>{
            setFilter(event.target.value)
          }}
          className='ml-5 md:ml-7 h-8 appearance-none rounded-full px-3 text-center text-md font-semibold'
          >
            <option value="old">old</option>
            <option value="recent">recent</option>
          </select>
        </div>

        <div className='flex justify-center'>
          {/* Event list */}
          <EventList/>
        </div>

        {/* Add new project*/}
        
      </div>
    </div>
  )
}

export default Events
