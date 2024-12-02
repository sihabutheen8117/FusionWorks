import React from 'react';
import { useState } from 'react';
import { usePostEventsMutation } from '../../../feature/userPostApi';

const AddEvents = ({ onClose }) => {

    const [ postEvents ,{ isLoading, isSuccess, isError } ] = usePostEventsMutation();

    const [projectData , setProjectData ] = useState({
        title : "" ,
        type_of_event : "" ,
        describtion : "",
        conducted_by : "",
        apply_form : ""
    })

    const handleSubmit = async () =>  {
        try {
         
            const response = await postEvents(projectData).unwrap();
            alert('Event Posted successfully!');
            setIsOpen(false);
            onClose();
          } catch (error) {
            console.log(error)
          }
    };

    const [isOpen, setIsOpen] = useState(true); 

    const closePopup = () => {
        setIsOpen(false);
        onClose();
    };

    return (
        <>
            {isOpen && (
                <>
                    <div className="fixed inset-0 bg-black opacity-50 z-50" onClick={closePopup}></div>
                    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300 shadow-lg p-6 z-50">
                        <h2 className="text-lg font-bold mb-2" >Add New Event</h2>

                        <div className="">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="title">
                                    Title
                                </label>
                                <input className="w-[320px] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="title" 
                                onChange={(event)=>{
                                    setProjectData(prevData => {
                                        return{
                                            ...prevData ,
                                            title : event.target.value
                                        }
                                    })
                                }}
                                />
                            </div>
                           
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="type_of_event">
                                    Event Type
                                </label>
                                <input className="w-[320px] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="type_of_event" type="text" placeholder="event type" 
                                onChange={(event)=>{
                                    setProjectData(prevData => {
                                        return{
                                            ...prevData ,
                                            type_of_event : event.target.value
                                        }
                                    })
                                }}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="conducted_by">
                                    Conducted by
                                </label>
                                <input className="w-[320px] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="conducted_by" type="text" placeholder="conducted by" 
                                onChange={(event)=>{
                                    setProjectData(prevData => {
                                        return{
                                            ...prevData ,
                                            conducted_by : event.target.value
                                        }
                                    })
                                }}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="apply_form">
                                    Link
                                </label>
                                <input className="w-[320px] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="apply_form" type="text" placeholder="link" 
                                onChange={(event)=>{
                                    setProjectData(prevData => {
                                        return{
                                            ...prevData ,
                                            apply_form : event.target.value
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

export default AddEvents;
