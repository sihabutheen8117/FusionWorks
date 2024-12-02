import React from 'react'
import EventList from './EventList'
import { useState } from 'react'
import { useGetEventsQuery } from '../../../feature/userPostApi.js'
import { useSelector } from 'react-redux'
import AddEvents from './AddEvents.js'

const Events = () => {

  const log = useSelector((state)=>state.user.log)
  const {data ,error , isLoading} = useGetEventsQuery();
  const [search ,setSearch] = useState("")
  const [filter,setFilter]  = useState("recent")
  const [ isAdd , setAdd ] = useState(false)

  const openAddEvent = () => {
    setAdd(true)
  }

  const closeAddEvent = () => {
    setAdd(false)
  }

  return (
    <div>
      <div className=''>

        <div className=''>
        { log.type ?
          <div className={`fixed lg:top-20 lg:right-7 bottom-5 right-7 `}>
            <button className={`text-white text-lg font-bold bg-cyan-500 hover:bg-cyan-600 py-1 px-5 rounded-full  `}
            onClick={openAddEvent}
            >new</button>
          </div> : ""
        }
        </div>
        

        <div className='flex flex-row mb-4 items-center fixed md:top-[4.5rem] top-[4.5rem] md:left-1/3 left-[9.5rem] z-50'>
          <div className='md:ml-10 ml-3 relative '>
            <input type="text" 
            placeholder = "search..."
            onChange={(event)=>{
              setSearch(event.target.value)
            }}
            className='md:h-10 h-8 text-white w-[17rem] md:w-[34rem] border border-gray-300 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring focus:ring-blue-500 bg-[#142347]'
            />
            <span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <i class="fas fa-search text-gray-500"></i>
            </span>
          </div>
          <select value={filter} 
          onChange={(event)=>{
            setFilter(event.target.value)
          }}
          className='ml-5 md:ml-7 h-7 md:h-8 appearance-none rounded-full px-3 text-center text-md font-semibold'
          >
            <option value="old">old</option>
            <option value="recent">recent</option>
          </select>
        </div>

        <div className='flex flex-col justify-center gap-6 w-full mt-16'>
          {
            isLoading ? "loading...": 
            (filter === "old" ) ? data.map((data ,index)=>(
              (search === "") ?
              <EventList data={data} key={index}/> :
              (data.subject.includes(search)) ?
              <EventList data={data} key={index}/> : ""
            )) : data.slice().reverse().map((data ,index)=>(
              (search === "") ?
              <EventList data={data} key={index}/> :
              (data.title.includes(search)) ?
              <EventList data={data} key={index}/> : ""
            ))
            
          }
          
        </div>

        {/* Add new project*/}

        {isAdd && <AddEvents onClose={closeAddEvent}/>}
        
      </div>
    </div>
  )
}

export default Events
