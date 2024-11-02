import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import { useGetLoginMutation } from '../../feature/authSlice'


const Login = () => {

  const [ getLogin ,{ isLoading, isSuccess, isError }] = useGetLoginMutation() ;

//{/* Login button Clicked*/}
const [log , setLog ] = useState({
  user : "",
  password : "",
})
const handleLogin = async ()=>{

  try {
    await getLogin(log).unwrap();  // Trigger the mutation
    alert('Loged In');
  } catch (error) {
    alert(error.data.errors)
  }

}




  return (
    <div>

       <div className='m-2 bg-rose-600 hover:bg-rose-400 rounded-full w-20 h-8 flex items-center justify-center shadow-lg'>
        <Link to="/" className="font-roboto font-bold text-white">Home</Link>
       </div>

       <div className="flex flex-col justify-center items-center h-screen">

          {/* Fusion Works Logo */}
          <div className=''>

          </div>

          {/* Login Cart */}

          <div className='rounded-md border-4 border-cyan-400 shadow-lg shadow-blue-500/50 p-5'>

            <div className='text-center mb-5 text-blue-200 font-bold text-lg'>
              Login to Fusion Works
            </div>

            <form  onSubmit={handleLogin}  className=''>

              <div className='relative mb-4'>
                <input  type="email" placeholder="Email or user name" 
                required
                onChange={(event)=>{
                  setLog(previousLog=>{
                    return{
                      ...previousLog,
                      user : event.target.value,
                    }
                  })
                }} className="w-64 text-blue-100 border-2 border-cyan-400 bg-[#101B35] rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none px-2 py-1" />
                <label className="absolute -top-3 left-4 bg-[#101B35] px-1 text-blue-100 font-semibold text-sm">
                email
                </label>
              </div>

              <div className='relative'>
                <input type="password" placeholder='Password' 
                required
                onChange={(event)=>{
                  setLog(previousLog=>{
                    return{
                      ...previousLog,
                      password : event.target.value,
                    }
                  })
                }} className="w-64 text-blue-100 border-2 border-cyan-400  bg-[#101B35] rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none px-2 py-1" />
                <label className="absolute -top-3 left-4 bg-[#101B35] px-1 text-blue-100 font-semibold text-sm">
                password
                </label>
              </div>

              {/* Login Button */}
              
              <div className='text-center mt-3 '>
                <input type="submit" className='text-blue-100 font-semibold bg-cyan-600 rounded-full border-4 border-cyan-600 pl-2 pr-2 hover:bg-[#101B35] hover:shadow-md hover:shadow-blue-500/50' value="Login"/>
              </div>
              
            </form>

            <div className='mt-1 text-blue-100  text-center'>
                are you new user ? <Link to="/sign/register" className="">Register</Link>
            </div>

          </div>

       </div>
    </div>
  )
}

export default Login
