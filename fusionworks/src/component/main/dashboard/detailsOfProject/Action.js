import React from 'react'
import { useSelector } from 'react-redux'
import { usePostApplyMutation } from '../../../../feature/userPostApi'

const Action = ({data}) => {

  const userLog = useSelector((state)=>state.user.log)
  const [ postApply ] = usePostApplyMutation()

  const handleKick = async (id , name) => {
    
    try{
      await postApply({
        id : data._id ,
        data : {
          memberToRemove : {
            id : id,
            name : name
          }
        }
      }).unwrap()
      alert("Member removed Successfully !!!")
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div className='mx-3 '>
      <table className='w-full my-3 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead className='text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope="col" className="px-6 py-3 text-center">
              Name
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {
            data?.members.details.map((obj , index )=> {

              if(userLog.userId === obj.id){
                return 
              }
              
              return(
                <tr className='border-b dark:border-gray-700' index={index}>
                  <th scope='row' className='font-medium text-lg text-gray-900 dark:text-white text-center px-3 py-2'>
                    {obj.name}
                  </th>
                  <th className='px-6 py-4 text-center text-red-500'>
                    <button
                    onClick={() => handleKick(obj.id , obj.name)}
                    >
                      Kickout 
                    </button>
                  </th>
                </tr>
              )
            })
          }
          
        </tbody>
      </table>
    </div>
  )
}

export default Action
