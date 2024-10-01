import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'

const Register = () => {

  
  const [credentials ,setCredentials] = useState({
    "email" :"",
    "password" :"",
    "rePassword":"",
    "name":"",
    "year":"1",
    "college":"",
    "department":"",
    "section":"",
    "wNumber":"",
  })


  {/* Register button Clicked */}
  const handleRegister = (event)=>{
    
    event.preventDefault()
    console.log(credentials.email)
    console.log(credentials.password)
    console.log(credentials.rePassword)
    console.log(credentials.name)
    console.log(credentials.year)
    console.log(credentials.college)
    console.log(credentials.department)
    console.log(credentials.section)
    console.log(credentials.wNumber)

  }





  return (
    <div>
      <div>start your carier with together</div>
      <div> Register to FusionWorks</div>

      <div className=''>
        <form className='conatainer flex flex-col' onSubmit={handleRegister}>

          <div className='relative'>
            <input id="email" type="email" 
            required
            onChange={(event)=>{
              setCredentials(preCredentials=>{
                return {
                  ...preCredentials,
                  "email" : event.target.value ,
                }
              })
            }}
            className="border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none px-2 py-1"/>
            <label className="absolute -top-3 left-4 bg-white px-1 text-gray-500 text-sm">
              email
            </label>
          </div>
          

          <div className='relative'>
            <input id="password" type="password" 
            required
            minlength="8"
            onChange={(event)=>{
              setCredentials(preCredentials=>{
                return {
                  ...preCredentials,
                  "password" : event.target.value ,
                }
              })
            }}
            className="border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none px-2 py-1"/>
            <label className="absolute -top-3 left-4 bg-white px-1 text-gray-500 text-sm">
              password 
            </label>
          </div> 
         
          <div className='relative'>
            <input id="rePassword" type="password" 
            required
            minlength="8"
            onChange={(event)=>{

              event.target.addEventListener('input',function(){

                if(!(event.target.value === credentials.password)){
                  event.target.setCustomValidity("Password does not match !!!")
                }
                else{
                  event.target.setCustomValidity("")
                }
              })
              setCredentials(preCredentials=>{
                return {
                  ...preCredentials,
                  "rePassword" : event.target.value ,
                }
              })
            }}
            className="border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none px-2 py-1"/>
            <label className="absolute -top-3 left-4 bg-white px-1 text-gray-500 text-sm">
              re enter password
            </label>
          </div>
    
          <div className='relative'>
            <input id="name" type="text" 
            required
            onChange={(event)=>{
              setCredentials(preCredentials=>{
                return {
                  ...preCredentials,
                  "name" : event.target.value ,
                }
              })
            }}
            className="border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none px-2 py-1"/>
            <label className="absolute -top-3 left-4 bg-white px-1 text-gray-500 text-sm">
              name
            </label>
          </div>

          <div className='relative'>
            <input id="college" type="text"
            onChange={(event)=>{
              setCredentials(preCredentials=>{
                return {
                  ...preCredentials,
                  "college" : event.target.value ,
                }
              })
            }}
            className="border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none px-2 py-1"/>
            <label className="absolute -top-3 left-4 bg-white px-1 text-gray-500 text-sm">
              college
            </label>
          </div>
      
          
          <div>

            <div className='relative'>
              <input id="department" type="text" 
              onChange={(event)=>{
                setCredentials(preCredentials=>{
                  return {
                    ...preCredentials,
                    "department" : event.target.value ,
                  }
                })
              }}
              className="border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none px-2 py-1"/>
              <label className="absolute -top-3 left-4 bg-white px-1 text-gray-500 text-sm">
                department
              </label>
            </div>

            <div className='relative'>
              <input id="section" type="text" 
              onChange={(event)=>{
                setCredentials(preCredentials=>{
                  return {
                    ...preCredentials,
                    "section" : event.target.value ,
                  }
                })
              }}
              className="border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none px-2 py-1"/>
              <label className="absolute -top-3 left-4 bg-white px-1 text-gray-500 text-sm">
                section
              </label>
            </div>
            
           
            <select id="year" name='year'
            value = {credentials.year}
            onChange={(event)=>{
              setCredentials(preCredentials=>{
                return {
                  ...preCredentials,
                  "year" : event.target.value ,
                }
              })
            }}

            >
              <option value="1">1st year</option>
              <option value="2">2st year</option>
              <option value="3">3st year</option>
              <option value="4">4st year</option>
            </select>

        
            
            <div className='relative'>
                <input id="wNumber" type='text'
                onChange={(event)=>{
                setCredentials(preCredentials=>{
                  return {
                    ...preCredentials,
                    "wNumber" : event.target.value ,
                  }
                })
              }}
              className='border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none px-2 py-1'/>
              <label className="absolute -top-3 left-4 bg-white px-1 text-gray-500 text-sm">
                whatsapp number
              </label>
            </div>

          </div>

          
          
          <input type="submit" value="Register"/>

        </form>
      </div>
      <div>
        already registered ? <Link to="/sign/login">log in</Link>
      </div>
    </div>
  )
}

export default Register
