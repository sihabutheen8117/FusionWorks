import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react';
import { usePostClubsMutation } from '../../../feature/userPostApi';
import { useGetUserDetailsQuery } from '../../../feature/userPostApi';
import { useEffect } from 'react';
const Profile = () => {
  
  const {data ,error , isLoad} = useGetUserDetailsQuery()
  const [ postClubs , { isLoading, isSuccess, isError } ] = usePostClubsMutation()

  const log = useSelector((state)=>state.user.log);

   const [credentials ,setCredentials] = useState({
      name :"",
      year :"1",
      college :"",
      department :"",
      section :"",
      links : {
        whatsapp :"",
        github : "",
        linkedIn : ""
      },
      picture : ""
    })
  
    
    useEffect(() => {
     
      if (data) {
   
    
        setCredentials((prev) => ({
          ...prev,
          ...data, 
        }));
      }
    }, [data]);

    const onSubmit = async () => {
       try {
         
            const response = await postClubs(credentials).unwrap();
            alert('Profile updated successfully!');
          } catch (error) {
            console.log(error)
          }
    }



  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(URL.createObjectURL(file));
        setCredentials((prev) => ({
          ...prev,
          picture: reader.result,
        }));
      };
    }
  };

  const handleButtonClick = () => {
    document.getElementById("fileInput").click();
  };



  return (
    <div>


<div>
      {/* Image Preview */}
      <div className="flex justify-center mt-2 mb-4">
        <div className="w-32 h-32 md:w-44 md:h-44 bg-white rounded-full flex items-center justify-center overflow-hidden">
          { credentials.picture || image ? (
            <img src={credentials.picture || image } alt="User" className="w-full h-full object-cover rounded-full" />
          ) : (
            <span className="text-gray-500">No Image</span>
          )}
        </div>
      </div>

      {/* Upload Button */}
      <div className="flex justify-center mb-2">
        <button
          className="bg-blue-500 hover:bg-blue-600 rounded-lg py-1 px-2 text-white font-medium"
          onClick={handleButtonClick}
        >
          Upload Image
        </button>
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
      </div>
    </div>

      <div class="grid gap-6 mb-6 md:grid-cols-2 mx-3">
        <div>
            <label for="first_name" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">{log.type ? "Club Name" : "User Name"}</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" 
            value={credentials.name}
            onChange={(event)=>{
              setCredentials(precred=>{
                return {
                  ...precred,
                  name : event.target.value
                }
              })
            }}
            />
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Email</label>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" disabled 
            value = {credentials.email}
            />
        </div>
      </div>


      
      <div class="grid gap-6 mb-6 md:grid-cols-3  mx-3">
        <div>
            <label for="first_name" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">College</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="college"
            value = {credentials.college}
            onChange={(event)=>{
              setCredentials(precred=>{
                return {
                  ...precred,
                  college : event.target.value
                }
              })
            }}
            />
        </div>
        {
          log.type ? "" : <div>
          <label for="last_name" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Department</label>
          <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Department"
          value={credentials.department}
          onChange={(event)=>{
            setCredentials(precred=>{
              return {
                ...precred,
                department : event.target.value
              }
            })
          }} />
           </div> 
        }
       
       {
          log.type ? "" :  <div>
          <label for="company" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Year</label>
          <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Year"
          value={credentials.year}
          onChange={(event)=>{
            setCredentials(precred=>{
              return {
                ...precred,
                year : event.target.value
              }
            })
          }} />
          </div>  
       }
       
    </div>


      <div class="grid gap-6 mb-6 md:grid-cols-3 mx-3">
        <div>
            <label for="first_name" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Whatsapp Number</label>
            <input type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+91"
            value={credentials.links.whatsapp}
            onChange={(event)=>{
              setCredentials(precred=>{
                return {
                  ...precred,
                 links : {
                  ...precred.links ,
                  whatsapp : event.target.value
                 }
                }
              })
            }} />
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Github Account</label>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="github" 
             value={credentials.links.github}
             onChange={(event)=>{
              setCredentials(precred=>{
                return {
                  ...precred,
                 links : {
                  ...precred.links ,
                  github : event.target.value
                 }
                }
              })
            }} />
        </div>
        <div>
            <label for="company" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">LinkedIn</label>
            <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="linkedIn" 
             value={credentials.links.linkedIn}
             onChange={(event)=>{
              setCredentials(precred=>{
                return {
                  ...precred,
                 links : {
                  ...precred.links ,
                  linkedIn : event.target.value
                 }
                }
              })
            }} />
        </div>  
    </div>

    <hr className='mb-6'></hr>
      
    <div className="text-stone-400 text-xl font-medium mb-6 ml-3"> Change Password</div>

    <div className='ml-3'>

      <div className='mx-3 mb-4'>
        <div className="text-stone-300 text-lg font-medium mb-2"> Old Password</div>
        <input type="password" id="old-pass" class="bg-gray-50 border md:w-5/12 border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
         placeholder="old password" 
           />
      </div>

      <div className='mx-3 mb-4'>
        <div className="text-stone-300 text-lg font-medium mb-2"> New Password</div>
        <input type="password" id="old-pass" class="bg-gray-50 border md:w-5/12 border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
         placeholder="new password" 
           />
      </div>

      <div className='mx-3'>
        <div className="text-stone-300 text-lg font-medium mb-2"> Re Enter New Password</div>
        <input type="password" id="old-pass" class="bg-gray-50 border md:w-5/12 border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
         placeholder="re enter new password" 
           />
      </div>
    </div>

    <div className='flex justify-end'>
      <button className='bg-green-500 hover:bg-green-600 rounded-md px-4 md:px-9 md:py-3 py-2 text-white font-semibold text-lg mr-3 md:text-xl' 
      onClick={onSubmit}
      >
        submit
      </button>
    </div>

    </div>
  )
}

export default Profile
