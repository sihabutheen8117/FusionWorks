import React from 'react'
import Clubs_view from './Clubs_view'
import {useState ,useEffect } from 'react'
import Club_scroll from './Club_scroll'
import { useGetClubsQuery } from '../../../feature/userPostApi'
import { useSelector } from 'react-redux'
import AddClubMessage from './AddClubMessage'

const Clubs = () => {

  const {data ,error , isLoading} = useGetClubsQuery()
  const [select , setSelect ] = useState({})

  const log = useSelector((state)=>state.user.log)
  const [ isAdd , setAdd ] = useState(false)

  const openAddEvent = () => {
    setAdd(true)
  }

  const closeAddEvent = () => {
    setAdd(false)
  }

  const [search ,setSearch] = useState({})
  const [clubs , setClubs ] = useState([])

  useEffect(() => {
    if (data) {
      setClubs(data);
      setSelect(data[0])
    }
  }, [data]);

  

  const handleClubs = (index) => {
    const newItems = [...clubs];
    const [selectedItem] = newItems.splice(index, 1); // Remove the clicked item
    newItems.unshift(selectedItem); // Add it to the beginning
    setSelect(selectedItem)
    setClubs(newItems); // Update the state with reordered items
  }

  return (
    <div>
      <div>

      { log.type ?
          <div className={`fixed lg:top-20 lg:right-7 bottom-5 right-7 `}>
            <button className={`text-white text-lg font-bold bg-cyan-500 hover:bg-cyan-600 py-1 px-5 rounded-full  `}
            onClick={openAddEvent}
            >new</button>
          </div> : ""
        }

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
                key = {club._id}
                club_name = {club.name}
                club_id = {club._id}
                onClick= {()=> handleClubs(index)}
                select = {select}
                />  
              ))
            }    
          </div>
        </div>

          <div className="m-2 mt-3">
            {
              select.club_messages ? select.club_messages.map((data , index)=><Clubs_view data={data} name={select.name} index={index}/>) 
              : 'no data available'
            }
            
          </div>

          {isAdd && <AddClubMessage onClose={closeAddEvent}/>}
      </div>
    </div>
  )
}

export default Clubs
