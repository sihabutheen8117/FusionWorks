import React from 'react'
import DiscussionList from './DiscussionList'
import { useGetMessageQuery } from '../../../feature/userPostApi'
import { storeUserLog } from '../../../feature/userLogSlice'
import { useSelector ,useDispatch } from 'react-redux'
import { useState } from 'react'
import { usePostMessageMutation } from '../../../feature/userPostApi'

const DiscussionForum = () => {

  const { data , error , isLoading } = useGetMessageQuery() ;
  const [ postMessage , { isSuccess, isError } ] = usePostMessageMutation();

  const userLog = useSelector((state)=>state.user.log)
  const [search ,setSearch] = useState({
    message : ""
  })

  const handleSearch = async () => {

    try{
      await postMessage(search).unwrap()
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className='mt-2'>
      <div className='w-full flex flex-col gap-4 md:pb-20 pb-3'>

        {
          isLoading ? "Loading..." :
          data?.map((data, index) => {
            return data.creator.id === userLog.userId ? (
              <DiscussionList data={data} you={true} index={index} key = {index}/>
            ) : (
              <DiscussionList data={data} you={false} index={index} key = {index}/>
            );
          })
        }

      </div>

      <div className='bg-gray-600 rounded-full text-sky-100 font-medium fixed flex justify-between bottom-3 right-7 md:left-48 left-7'>
        <div className='pl-3 md:pl-5 py-2'>
        <input 
          type="text" 
          className="md:w-[88rem] w-[25rem] appearance-none border-none bg-transparent outline-none p-0 focus:ring-0"
          placeholder="Type here..."
          onChange={(event)=>{
            setSearch({
              message : event.target.value
            })
          }}
        />
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

export default DiscussionForum
