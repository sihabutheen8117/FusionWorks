import React from 'react'
import Clubs_view from './Clubs_view'
import {useState } from 'react'
import Club_scroll from './Club_scroll'


const Clubs = () => {

  const [select , setSelect ] = useState("")

  const [search ,setSearch] = useState("")
  const [clubs , setClubs ] = useState([{id : 1 , club : "club 1"}
    , {id : 2 , club : "club 2"}
    , {id : 3 , club : "club 3"}
    , {id : 4 , club : "club 4"}
    , {id : 5 , club : "club 5"}
    , {id : 6 , club : "club 6"}
    , {id : 7 , club : "club 7"}
    , {id : 8 , club : "club 8"}
    , {id : 9 , club : "club 9"}
  ])

  const handleClubs = (index) => {
    const newItems = [...clubs];
    const [selectedItem] = newItems.splice(index, 1); // Remove the clicked item
    newItems.unshift(selectedItem); // Add it to the beginning
    setSelect(selectedItem.id)
    setClubs(newItems); // Update the state with reordered items
  }
  
  return (
    <div>
      <div>
        <div className='flex flex-row items-center'>
          <div className='md:ml-10 ml-3 relative mb-3'>
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
        </div>
        

        <div className="w-full ">
          <div className="flex overflow-x-auto space-x-4 hide-scrollbar">
            {
              clubs.map((club , index)=>(
                <Club_scroll 
                key = {club.id}
                club_name = {club.club}
                club_id = {club.id}
                onClick= {()=> handleClubs(index)}
                select = {select}
                />  
              ))
            }    
          </div>
        </div>

          <div className="m-2 mt-3">
            <Clubs_view/>
          </div>
      </div>
    </div>
  )
}

export default Clubs
