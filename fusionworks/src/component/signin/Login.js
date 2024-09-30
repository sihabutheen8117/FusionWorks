import React from 'react'
import { useState } from 'react'

const Login = () => {


//{/* Login button Clicked*/}
const [log , setLog ] = useState({
  "user" : "",
  "password" : "",
})
const logIn = ()=>{
  console.log(log.user)
  console.log(log.password)
}








  return (
    <div>
       <div className="">

          <div>
            Login to Fusion Works
          </div>

          <div>
            <input  type="email" placeholder="Email or user name" onChange={(event)=>{
              setLog(previousLog=>{
                return{
                  ...previousLog,
                  "user" : event.target.value,
                }
              })
            }} className="rounded-md ring-2" required/>
          </div>
          <div>
            <input type="password" placeholder='Password' onChange={(event)=>{
              setLog(previousLog=>{
                return{
                  ...previousLog,
                  "password" : event.target.value,
                }
              })
            }} className="rounded-md ring-2" required/>
          </div>
          <div>
            <button onClick={logIn}>Log in</button>
          </div>

       </div>
    </div>
  )
}

export default Login
