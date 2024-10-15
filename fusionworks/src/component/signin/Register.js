import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import { useAddPostsMutation } from '../../feature/regsiterSlice.js'

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

  const  [addPosts ,{data ,error ,isLoading }] = useAddPostsMutation();

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

    

      addPosts({ 
        name : credentials.name,
        email : credentials.email,
        password : credentials.password,
      });
   


  }





  return (
    <div>

      <div className='m-2 bg-rose-600 hover:bg-rose-400 rounded-full w-20 h-8 flex items-center justify-center shadow-lg'>
        <Link to="/" className="font-roboto font-bold text-white">Home</Link>
      </div>
      
      <div className='flex flex-col justify-center items-center h-screen'>

          {/* Fusion Works Logo */}
          <div className=''>

          </div>

          <div className='rounded-md border-4 border-cyan-400 shadow-lg shadow-blue-500/50 p-7'>

            <div className='text-center mb-5 text-blue-200 font-bold text-lg'> 
              Register to FusionWorks
            </div>

            <form className='conatainer flex flex-col' onSubmit={handleRegister}>

              <div className='relative'>
                <input id="email" type="email" placeholder='enter your email'
                required
                onChange={(event)=>{
                  setCredentials(preCredentials=>{
                    return {
                      ...preCredentials,
                      "email" : event.target.value ,
                    }
                  })
                }}
                className="w-64 text-blue-100 border-2 border-cyan-400 bg-[#101B35] rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none px-2 py-1 mb-4"/>
                <label className="absolute -top-3 left-4 bg-[#101B35] px-1 text-blue-100 font-semibold text-sm">
                  email
                </label>
              </div>
              

              <div className='relative'>
                <input id="password" type="password" placeholder='create password'
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
                className="w-64 text-blue-100 border-2 border-cyan-400 bg-[#101B35] rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none px-2 py-1 mb-4"/>
                <label className="absolute -top-3 left-4 bg-[#101B35] px-1 text-blue-100 font-semibold text-sm">
                  password 
                </label>
              </div> 
            
              <div className='relative'>
                <input id="rePassword" type="password" placeholder='re enter password'
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
                className="w-64 text-blue-100 border-2 border-cyan-400 bg-[#101B35] rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none px-2 py-1 mb-4"/>
                <label className="absolute -top-3 left-4 bg-[#101B35] px-1 text-blue-100 font-semibold text-sm">
                  re enter password
                </label>
              </div>

              <div className='relative'>
                <input id="name" type="text" placeholder='your name'
                required
                onChange={(event)=>{
                  setCredentials(preCredentials=>{
                    return {
                      ...preCredentials,
                      "name" : event.target.value ,
                    }
                  })
                }}
                className="w-64 text-blue-100 border-2 border-cyan-400 bg-[#101B35] rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none px-2 py-1 mb-4"/>
                <label className="absolute -top-3 left-4 bg-[#101B35] px-1 text-blue-100 font-semibold text-sm">
                  name
                </label>
              </div>

              <div className='relative'>
                <input id="college" type="text" placeholder='your college'
                onChange={(event)=>{
                  setCredentials(preCredentials=>{
                    return {
                      ...preCredentials,
                      "college" : event.target.value ,
                    }
                  })
                }}
                className="w-64 text-blue-100 border-2 border-cyan-400 bg-[#101B35] rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none px-2 py-1 mb-4"/>
                <label className="absolute -top-3 left-4 bg-[#101B35] px-1 text-blue-100 font-semibold text-sm">
                  college
                </label>
              </div>

              
              <div>

                <div className='relative'>
                  <input id="department" type="text" placeholder='department'
                  onChange={(event)=>{
                    setCredentials(preCredentials=>{
                      return {
                        ...preCredentials,
                        "department" : event.target.value ,
                      }
                    })
                  }}
                  className="w-64 text-blue-100 border-2 border-cyan-400 bg-[#101B35] rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none px-2 py-1 mb-4"/>
                  <label className="absolute -top-3 left-4 bg-[#101B35] px-1 text-blue-100 font-semibold text-sm">
                    department
                  </label>
                </div>

                <div className='relative'>
                  <input id="section" type="text" placeholder='section in capital letter'
                  onChange={(event)=>{
                    setCredentials(preCredentials=>{
                      return {
                        ...preCredentials,
                        "section" : event.target.value ,
                      }
                    })
                  }}
                  className="w-64 text-blue-100 border-2 border-cyan-400 bg-[#101B35] rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none px-2 py-1 mb-4"/>
                  <label className="absolute -top-3 left-4 bg-[#101B35] px-1 text-blue-100 font-semibold text-sm">
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
                className='mb-5 block appearance-none w-full bg-[#101B35] text-white border border-cyan-400 rounded-lg py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-cyan-700 hover:bg-cyan-800 '
                >
                  <option value="1">1st year</option>
                  <option value="2">2nd year</option>
                  <option value="3">3rd year</option>
                  <option value="4">4th year</option>
                </select>

            
                
                <div className='relative'>
                    <input id="wNumber" type='text' placeholder='whatsapp number'
                    onChange={(event)=>{
                    setCredentials(preCredentials=>{
                      return {
                        ...preCredentials,
                        "wNumber" : event.target.value ,
                      }
                    })
                  }}
                  className='w-64 text-blue-100 border-2 border-cyan-400 bg-[#101B35] rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none px-2 py-1 mb-2'/>
                  <label className="absolute -top-3 left-4 bg-[#101B35] px-1 text-blue-100 font-semibold text-sm">
                    whatsapp number
                  </label>
                </div>

              </div>

              
              
              <div className='text-center mt-3'>
                <input type="submit" className='text-blue-100 font-semibold bg-cyan-600 rounded-full border-4 border-cyan-600 pl-2 pr-2 hover:bg-[#101B35] hover:shadow-md hover:shadow-blue-500/50' value="Register"/>
              </div>

            </form>

            <div className='mt-1 text-blue-100  text-center'>
             already registered ? <Link to="/sign/login">log in</Link>
            </div>

          </div>

      </div>
      
    </div>
  )
}

export default Register
