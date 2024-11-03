import React from 'react';
import { useState } from 'react';
import { usePostProjectMutation } from '../../../feature/userPostApi';

const AddProject = ({ onClose }) => {
    const [ postProject ,{ isLoading, isSuccess, isError } ] = usePostProjectMutation();

    const [projectData , setProjectData ] = useState({
        subject : "" ,
        person_needed : "" ,
        describtion : ""
    })

    const handleSubmit = async () =>  {
        try {
            await postProject(projectData).unwrap();  // Trigger the mutation
            alert('posted successful !!!');
          } catch (error) {
            console.log(error)
          }
    };

    const [isOpen, setIsOpen] = useState(true); // Initially set to true when AddProject is rendered

    const closePopup = () => {
        setIsOpen(false);
        onClose(); // Call the parent close function
    };

    return (
        <>
            {isOpen && (
                <>
                    <div className="fixed inset-0 bg-black opacity-50 z-50" onClick={closePopup}></div>
                    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300 shadow-lg p-6 z-50">
                        <h2 className="text-lg font-bold mb-2" >Add New Project</h2>

                        <div className="">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="subject">
                                    Subject
                                </label>
                                <input className="w-[320px] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="subject" type="text" placeholder="subject" 
                                onChange={(event)=>{
                                    setProjectData(prevData => {
                                        return{
                                            ...prevData ,
                                            subject : event.target.value
                                        }
                                    })
                                }}
                                />
                            </div>
                           
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="persons">
                                    Persons needed
                                </label>
                                <input className="w-[320px] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="persons" type="number" placeholder="persons" 
                                onChange={(event)=>{
                                    setProjectData(prevData => {
                                        return{
                                            ...prevData ,
                                            person_needed : event.target.value
                                        }
                                    })
                                }}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="describtion">
                                    Describtion
                                </label>
                                <textarea className="w-[320px] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="describtion" type="text" placeholder="describtion" 
                                onChange={(event)=>{
                                    setProjectData(prevData => {
                                        return{
                                            ...prevData ,
                                            describtion : event.target.value
                                        }
                                    })
                                }}
                                >
                                </textarea>
                            </div>

                            <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick ={handleSubmit}
                            >
                                Submit
                            </button>
                            <button 
                                onClick={closePopup} 
                                className=" bg-red-500 text-white font-bold px-4 py-2 rounded"
                            >
                                Close
                            </button>
                            </div>
                        </div>

                        
                    </div>
                </>
            )}
        </>
    );
};

export default AddProject;
