import React from 'react'

const HomeBody = () => {
  return (
    <div>

      {/* for logo and name */}
      <div> 

      </div>

      {/* for Features */}
      <div className=''>
        <div className='text-center font-roboto font-bold text-2xl text-white mb-10'>
          Features
        </div>

        <div className='flex flex-row flex-wrap justify-around '>

          <div className='w-72 h-56 mt-10  font-roboto rounded-lg bg-zinc-800 hover:shadow-md hover:shadow-zinc-200 hover:w-[18.25rem] hover:h-[14.25rem] hover:bg-zinc-790'>
            <div className='text-white font-extrabold text-xl text-center m-5'>
              Are you working on something cool? Need contributors? 
            </div>
            <div className='m-3 text-center font-medium text-gray-400'>
              Post your project, and find the right people to help bring your ideas to life.
            </div>
          </div>

          <div className='w-72 h-56 mt-10  font-roboto rounded-lg bg-zinc-800 hover:shadow-md hover:shadow-zinc-200 hover:w-[18.25rem] hover:h-[14.25rem] hover:bg-zinc-790'>
            <div className='text-white font-extrabold text-xl text-center m-2'>
              Join Clubs
            </div>
            <div className='m-3 text-center font-medium text-gray-400'>
              Clubs can create profiles, post their upcoming events, and recruit 
              new members. Whether you're hosting a symposium or looking for core 
              members, our platform makes it easier for you to connect with like-minded 
              individuals.
            </div>
          </div>

          <div className='w-72 h-56 mt-10  font-roboto rounded-lg bg-zinc-800 hover:shadow-md hover:shadow-zinc-200 hover:w-[18.25rem] hover:h-[14.25rem] hover:bg-zinc-790'>
            <div className='text-white font-extrabold text-xl text-center m-5'>
              Ask & Answer Questions
            </div>
            <div className='m-3 text-center font-medium text-gray-400'>
              Got a doubt? Ask the community! Researchers, 
              students, and tech enthusiasts are here to share their knowledge. 
              Anyone can post a question, and anyone can answer.
            </div>
          </div>

          <div className='w-72 h-56 mt-10  font-roboto rounded-lg bg-zinc-800 hover:shadow-md hover:shadow-zinc-200 hover:w-[18.25rem] hover:h-[14.25rem] hover:bg-zinc-790'>
            <div className='text-white font-extrabold text-xl text-center m-5'>
              Collaborate on Research
            </div>
            <div className='m-3 text-center font-medium text-gray-400'>
              This platform is a space for researchers to seek 
              clarifications, share insights, and recruit team members for their projects. 
              Share your needs and let others join your journey toward innovation.
            </div>
          </div>

        </div>
      </div>

      {/* How it Works */}

      <div className=''>
        <div className='text-center font-roboto font-bold text-2xl text-white mb-10 mt-16'>
          How it Works
        </div>


        <div className='flex flex-row flex-wrap justify-around gapt-10 mt-15'>

          <div className="w-64 mt-7">
            <div className="text-white font-semibold text-center text-7xl">1</div>
            <div className='text-center font-bold text-white mt-3 text-2xl'>
              Create an Account
            </div>
            <div className='text-center text-white mt-2 font-medium'>
              Get started by signing up as an individual or club
            </div>
          </div>

          <div className="w-64 mt-7">
            <div className="text-white font-semibold text-center text-7xl">2</div>
            <div className='text-center font-bold text-white mt-3 text-2xl'>
              Post & Participate
            </div>
            <div className='text-center text-white mt-2 font-medium'>
              Whether you want to post a project, host an event, or ask 
              a question, everything is just a click away
            </div>
          </div>

          <div className="w-64 mt-7">
            <div className="text-white font-semibold text-center text-7xl">3</div>
            <div className='text-center font-bold text-white mt-3 text-2xl'>
              Connect & Collaborate
            </div>
            <div className='text-center text-white mt-2 font-medium'>
              Start connecting with fellow students, clubs, and 
              researchers. Build a community, learn from others, and grow together
            </div>
          </div>

        </div>

      </div>

      {/* About */}

      

    </div>
  )
}

export default HomeBody
