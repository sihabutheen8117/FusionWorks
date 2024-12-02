import React from 'react'
import { useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { usePostMessageMutation } from '../../../feature/userPostApi'

const DiscussionList = (props) => {


    const [ postMessage , { isLoading, isSuccess, isError } ] = usePostMessageMutation();

    const [reaction , setReaction ] = useState({
        liked : false ,
        disliked : false ,
    }) 

    const handleLikes = async () => {

        const updatedReaction = {
            ...reaction ,
            liked : !reaction.liked,
            disliked : false
        }

        setReaction(updatedReaction)

        const newData = {
            reaction : updatedReaction,
            id : props.data._id
        }

        try{
            console.log(newData)
            const response = await postMessage(newData).unwrap();
            console.log(response)
        }catch(error){
            console.log(error)
        }
    }
    const handleDislikes = async () => {
        const updatedReaction = {
            ...reaction ,
            disliked : !reaction.disliked,
            liked : false
        }

        setReaction(updatedReaction)

        const newData = {
            reaction : updatedReaction,
            id : props.data._id
        }

        try{
            const response = await postMessage(newData).unwrap();
            console.log(response)
        }catch(error){
            console.log(error)
        }
    }



  return (
    <div>
        <div className={`flex ${props.you ? 'flex-row-reverse' : 'flex-row'} md:mx-1 mx-2`}>
            <div className='flex flex-col rounded-lg ring-2 ring-cyan-700 max-w-[90%] p-1 px-2'>
                <div className={`flex justify-between gap-2 ${props.you ? 'flex-row-reverse' : 'flex-row' }`}>
                    <div className='flex flex-row'>
                        <div className={`w-9 h-9 bg-white rounded-full ${props.you ? 'hidden' : 'block'}`}>

                        </div>
                        <div className='font-bold ml-1 text-lg text-sky-200'>
                            {props.you ? 'you' : 'others name'}
                        </div>
                    </div>
                    <div className='text-center font-mono text-sky-100 text-opacity-50 mr-3 ml-4'>
                     { formatDistanceToNow(new Date(props.data.createdAt) ,{ addSuffix:true}) }
                    </div>
                </div>
                <div className='bg-gray-700 m-3 pl-3 pr-3 py-1 rounded-xl text-sky-100 font-medium text-lg'>
                    {props.data.message}
                </div>
                
                {/* Replies */}
                <div>
                    <div className={`flex flex-row mx-3 ${props.you ? '':'justify-end'}`} >
                        {/* this section is for reply messages */}
                        {/* before developing reply messages section change the like and dislik flex basis */}
                        {/* <div className='basis-9/12'>
                            this is replies from other
                        </div> */}

                        <div className='flex flex-row justify-end text-sky-100'>
                            <div className='grid grid-cols-2 divide-x bg-gray-700 rounded-full p-1 px-2'>
                                <button className='pl-1 pr-2 flex flex-row items-center gap-2 bg-gray-700'
                                onClick={handleLikes}
                                >
                                    <i className="fas fa-thumbs-up pt-1"></i>
                                    <div>
                                        {props.data.numberOfLikes === 0 ? '' : props.data.numberOfLikes }
                                        
                                    </div>
                                </button>
                                <button className='pl-2 flex flex-row items-center gap-2'
                                onClick={handleDislikes}
                                >
                                    <i className="fas fa-thumbs-down pt-1"></i>
                                    <div>
                                        {props.data.numberOfDisLikes === 0 ? '' : props.data.numberOfDisLikes}
                                    </div>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DiscussionList
