import React from 'react'

const Club_scroll = (props) => {
  const setSelect = (props.club_id == props.select._id) ? "border-cyan-400 border-2" : "border-blue-500" ;

  return (
    <div>
      <div className={`rounded-full border w-fit ${setSelect} hover:border-cyan-400 hover:border-2`}>
               <div className="flex flex-row p-1 gap-2">
                 <div className="h-8 w-8 bg-gray-300 rounded-full"
                 onClick={props.onClick}
                 >
              
                 </div>
                 <div className="flex items-center pr-2 font-semibold text-white"
                 onClick={props.onClick}
                 >
                    {props.club_name}
                 </div>
               </div>
            </div>
    </div>
  )
}

export default Club_scroll
