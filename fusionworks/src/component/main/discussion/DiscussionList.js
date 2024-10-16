import React from 'react'

const DiscussionList = (props) => {
  return (
    <div>
        <div className={`flex ${props.you ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className='flex flex-col rounded-lg ring-2 ring-cyan-700 max-w-[80%] p-1 px-2'>
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
            </div>
        </div>
    </div>
  )
}

export default DiscussionList
