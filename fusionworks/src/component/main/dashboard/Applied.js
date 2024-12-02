import React from 'react'
import { useGetProjectsQuery } from '../../../feature/userPostApi.js'
import { useSelector } from 'react-redux'
import ProjectList from '../project/ProjectList.js'

const Applied = () => {

  const {data ,error , isLoading} = useGetProjectsQuery();
  const log = useSelector((state)=>state.user.log)

  return (
    <div className='mt-3'>
      {
        data?.map((data , index)=>
          data.members.details.some( obj => obj.id === log.userId) ? 
          <ProjectList data={data} log={log} index={index} /> : ""
        )
      }
    </div>
  )
}

export default Applied
