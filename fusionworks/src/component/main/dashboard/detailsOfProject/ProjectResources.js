import React from 'react'
import { useState } from 'react'
import ProjectResourcesList from './ProjectResourcesList'
import { usePostApplyMutation } from '../../../../feature/userPostApi'
import { useSelector } from 'react-redux'

const ProjectResources = ({data}) => {

  const userLog = useSelector((state)=>state.user.log)
  const [ postApply , { isSuccess, isError } ] = usePostApplyMutation()
  const [resources, setResources] = useState(data.members.resources || []);

  const [search ,setSearch] = useState({
   desc : "" ,
   link : ""
  })
  const handleSearch =  async() => {
    try{
      const newResources = {
        name : userLog.userName ,
        createdAt: new Date().toISOString(),
        desc : search.desc,
        link : search.link
      }
      await postApply({
        id : data._id ,
        data : {
          newResources : {
            desc : search.desc ,
            link : search.link
          }
        }
      }).unwrap()
      setResources((prev) => [...prev , newResources])
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div>
      <div className='mb-16'>
        {
          resources.map((res , index) => (
            <ProjectResourcesList data={res} key={index} />
          ))
        }
      </div>
      <div className=' text-sky-100 font-medium fixed flex bottom-3 right-7 md:left-48 left-7 md:ml-36 gap-5'>
        <div className='md:flex gap-5 ' >
          <div className='pl-3 md:pl-5 py-2 bg-gray-600 rounded-full mb-2 md:mb-0'>
            <input 
              type="text" 
              className="md:w-[30rem] w-[10rem] appearance-none border-none bg-transparent outline-none p-0 focus:ring-0"
              placeholder="Type here..."
              onChange={(event)=>{
                setSearch((prev) =>({
                  ...prev,
                  desc : event.target.value,
                }))
              }}
            />
          </div>

          <div className='pl-3 md:pl-5 py-2 bg-gray-600 rounded-full'>
            <input 
              type="text" 
              className="md:w-[30rem] w-[25rem] appearance-none border-none bg-transparent outline-none p-0 focus:ring-0"
              placeholder="Type here..."
              onChange={(event)=>{
                setSearch((prev) =>({
                  ...prev,
                  link : event.target.value,
                }))
              }}
            />
          </div>
        </div>
        <div className='p-1'>
          <button class="p-2 bg-green-500 text-white rounded-full w-10 h-10 hover:bg-green-600"
          onClick={handleSearch}
          >
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectResources
