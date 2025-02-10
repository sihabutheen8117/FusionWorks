import React from 'react'
import DetailsYourProject from './DetailsYourProject'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useGetProjectsQuery } from '../../../feature/userPostApi'
import { useDeleteProjectMutation } from '../../../feature/userPostApi'


const YourProjects = () => {

  const {data ,error} = useGetProjectsQuery();
  const [ deleteProject , { isLoading, isSuccess, isError } ] = useDeleteProjectMutation()
  const log = useSelector((state)=>state.user.log)
  const [ select , setSelect ] = useState()

  var ind = 1

  const handleDashboard = (projectDetails) => {
    setSelect(projectDetails)
  }

  const handleDelete = async (id) => {
    try{
      const result = await deleteProject({id : id}).unwrap(0)
      alert("project deleted successfully !!!")
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div>
      
      {
        select ? <DetailsYourProject data={select} myproj={ select.creator.id == log.userId}/> : 
        <div class="overflow-x-auto">
        <table class="table-auto w-full border-collapse border-gray-300 mt-3">
          <thead>
            <tr class="bg-gray-200/30 ">
              <th class="border border-gray-300 px-4 py-2 text-left text-gray-300">Sno</th>
              <th class="border border-gray-300 px-4 py-2 text-left">Subject</th>
              <th class="border border-gray-300 px-4 py-2 text-center">Delete</th>
              <th class="border border-gray-300 px-4 py-2 text-center">Dashboard</th>
            </tr>
          </thead>
          <tbody>

            {
              data?.map((obj , index)=>
                obj.members.details?.some((x)=>  x.id == log.userId) ? 
                  <tr class="odd:bg-white/70 even:bg-gray-50/70 hover:bg-gray-100/60" index={index} key={index}>
                    <td class="border border-gray-300 px-4 py-2">{ind++}</td>
                    <td class="border border-gray-300 px-4 py-2">{obj.subject}</td>
                    <td class="border border-gray-300 px-4 py-2 text-center">
                      <button class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      onClick={() => handleDelete(obj._id)}
                      >Delete</button>
                    </td>
                    <td class="border border-gray-300 px-4 py-2 text-center">
                      <button class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                       onClick={() => handleDashboard(obj)}
                      >Dashboard</button>
                    </td>
                </tr> : ""
            )
            }
          </tbody>
        </table>
      </div>
      }
      
      
    </div>
  )
}

export default YourProjects
