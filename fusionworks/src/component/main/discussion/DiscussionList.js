import React from 'react'
import { useState } from 'react'

const DiscussionList = (props) => {



    const [reaction , setReaction ] = useState({
        likes : 100000000 ,
        dislikes : 0 ,
    }) 

    const handleLikes = () => {
        setReaction(prev => ({
            ...prev ,
            likes : prev.likes +1 
        }))
    }
    const handleDislikes = () => {
        setReaction(prev => ({
            ...prev ,
            dislikes : prev.dislikes +1 
        }))
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
                        1 hour ago
                    </div>
                </div>
                <div className='bg-gray-700 m-3 pl-3 py-1 rounded-xl text-sky-100 font-medium text-lg'>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
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
                                        {reaction.likes === 0 ? '' : reaction.likes}
                                    </div>
                                </button>
                                <button className='pl-2 flex flex-row items-center gap-2'
                                onClick={handleDislikes}
                                >
                                    <i className="fas fa-thumbs-down pt-1"></i>
                                    <div>
                                        {reaction.dislikes === 0 ? '' : reaction.dislikes}
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
