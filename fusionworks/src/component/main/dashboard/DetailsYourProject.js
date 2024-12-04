import React from 'react'
import { useState } from 'react'


import Action from './detailsOfProject/Action'
import JoinRequest from './detailsOfProject/JoinRequest'
import Members from './detailsOfProject/Members'
import ProjectResources from './detailsOfProject/ProjectResources'


const DetailsYourProject = ({data , myproj}) => {

  const [option ,setOption] = useState({
    id : 1,
    component : <Members data={data}/>
  })

  return (
    <div>
      <div className=''>

        <div className='border-2 border-cyan-400 rounded-lg mt-3'>

          <div className='flex flex-auto justify-between px-3 gap-3 py-3 text-sky-200'>
            <div className='text-white text-2xl font-semibold font-roboto'>
              Subject 
            </div>
            <div className='text-center font-mono text-sky-100 text-opacity-50 mr-3'>
               about 1 hour ago
            </div>
          </div>

          <div className='bg-gray-700 mx-3 mb-3 pl-3 py-1 rounded-xl text-sky-100 font-medium text-lg'>
            describtion
          </div>

          <div className='border-2 rounded-lg border-cyan-400 m-3'>
            <div className='flex flex-auto justify-around border-b-2 border-cyan-400 text-sky-100'>

               <div className={` flex-1 border-r-2 border-cyan-400 text-center py-2 hover:bg-sky-300/30 ${ option.id == 1 ? "bg-sky-300/10" : ""}`}
               onClick={() => setOption({
                id : 1 ,
                component : <Members data={data}/>
               })}
               >
                  Members
               </div>

               {
                myproj ? 
                <div className={`flex-1 border-r-2 border-cyan-400 text-center py-2 hover:bg-sky-300/30 ${ option.id == 2 ? "bg-sky-300/10" : ""}`}
                onClick={() => setOption({
                 id : 2 ,
                 component : <Action data={data}/>
                })}
                >
                   Action
                </div>
                :
                ""
               }

               
               <div className={`flex-1 text-center py-2 hover:bg-sky-300/30 ${ option.id == 3 ? "bg-sky-300/10" : ""}`}
               onClick={() => setOption({
                id : 3 ,
                component : <ProjectResources data={data}/>
               })}
               >
                  Resources
               </div>

            </div>

            <div>
            {option.component}
            </div>
            
          </div>
          

        </div>
      </div>

      
    </div>
  )
}

export default DetailsYourProject
