import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'

const Login = () => {


//{/* Login button Clicked*/}
const [log , setLog ] = useState({
  "user" : "",
  "password" : "",
})
const handleLogin = ()=>{
  console.log(log.user)
  console.log(log.password)
}




  return (
    <div>
       <div className="">

          <div>
            Login to Fusion Works
          </div>

          <form  onSubmit={handleLogin}  className=''>
            <div className='relative'>
              <input  type="email" placeholder="Email or user name" 
              required
              onChange={(event)=>{
                setLog(previousLog=>{
                  return{
                    ...previousLog,
                    "user" : event.target.value,
                  }
                })
              }} className="border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none px-2 py-1" />
              <label className="absolute -top-3 left-4 bg-white px-1 text-gray-500 text-sm">
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
                    "password" : event.target.value,
                  }
                })
              }} className="border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none px-2 py-1" />
              <label className="absolute -top-3 left-4 bg-white px-1 text-gray-500 text-sm">
               password
              </label>
            </div>
            <div>
              <input type="submit" value="Login"/>
            </div>
            
          </form>

          <div>
              are you new user ? <Link to="/sign/register" className="">Register</Link>
          </div>

       </div>
    </div>
  )
}

export default Login
