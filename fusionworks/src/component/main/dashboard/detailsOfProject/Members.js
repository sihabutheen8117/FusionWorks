import React from 'react'
import MessageList from './MessageList'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { usePostApplyMutation } from '../../../../feature/userPostApi'

const Members = ({data}) => {

  const userLog = useSelector((state)=>state.user.log)

  const [ postApply , { isSuccess, isError } ] = usePostApplyMutation()
  const [messages, setMessages] = useState(data.members.messages || []);

  const [search ,setSearch] = useState({
    id : data._id,
    data : {
      newMessage : {
        message : ""
      }
    }
  })

  const handleSearch = async () => {
   try{

    const newMessage = {
      user: userLog.userId,
      name: 'You', // Customize as needed
      createdAt: new Date().toISOString(),
      message: search.data.newMessage.message,
    };

    await postApply(search).unwrap()
    setMessages((prev) => [...prev, newMessage]);
    alert("Message Posted !!!")
   }catch(error){
    console.log(error)
   }
  }

  return (
    
    <div className='mt-3'>
     
      <div className='w-full flex flex-col gap-4 md:pb-20 pb-3'>

        {/* {
          data?.members.messages.map((data, index) => {
            return data.user === userLog.userId ? (
              <MessageList data={data} you={true} index={index} />
            ) : (
              <MessageList data={data} you={false} index={index} />
            );
          })
        } */}

        {messages.map((message, index) => (
          <MessageList
            key={index}
            data={message}
            you={message.user === userLog.userId}
            index={index}
          />
        ))}

        </div>

        <div className=''>
        <div className='bg-gray-600 rounded-full text-sky-100 font-medium fixed flex justify-between bottom-3 right-7 md:left-48 left-7'>
        <div className='pl-3 md:pl-5 py-2'>
        <input 
          type="text" 
          className="md:w-[88rem] w-[25rem] appearance-none border-none bg-transparent outline-none p-0 focus:ring-0"
          placeholder="Type here..."
          onChange={(event)=>{
            setSearch((prev) =>({
              ...prev,
              data : {
                newMessage : {
                  message : event.target.value
                }
              }
            }))
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
    </div>
  )
}

export default Members
