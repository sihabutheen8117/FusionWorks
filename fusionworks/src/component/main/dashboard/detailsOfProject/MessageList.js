    import React from 'react'
    import { formatDistanceToNow } from 'date-fns'

    const MessageList = (props) => {
        

    
    return (
        <div className='md:mx-2 mx-1'>
            <div className={`flex ${props.you ? 'flex-row-reverse' : 'flex-row'} md:mx-1 mx-2`}>
                <div className='flex flex-col rounded-lg ring-2 ring-cyan-700 max-w-[90%] p-1 px-2'>
                    <div className={`flex justify-between gap-2 ${props.you ? 'flex-row-reverse' : 'flex-row' }`}>
                        <div className='flex flex-row'>
                            <div className={`w-9 h-9 bg-white rounded-full ${props.you ? 'hidden' : 'block'}`}>

                            </div>
                            <div className='font-bold ml-1 text-lg text-sky-200'>
                                {props.you ? 'you' : props.data.name }
                            </div>
                        </div>
                        <div className='text-center font-mono text-sky-100 text-opacity-50 mr-3 ml-4'>
                        { formatDistanceToNow(new Date(props.data.createdAt) ,{ addSuffix:true}) }
                        </div>
                    </div>
                    <div className='bg-gray-700 m-3 pl-3 pr-3 py-1 rounded-xl text-sky-100 font-medium text-lg'>
                        {props.data.message}
                    </div>
                </div>
            </div>
        </div>
    )
    }

    export default MessageList
