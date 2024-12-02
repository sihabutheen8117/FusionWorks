import React from 'react'
import { useState } from 'react';
import { usePostClubsMutation } from '../../../feature/userPostApi';

const AddClubMessage = ({ onClose }) => {

    const [ postClubs , { isLoading, isSuccess, isError } ] = usePostClubsMutation()

    const [projectData , setProjectData ] = useState({
        newMessage : true ,
        subject : "",
        details : "",
        links: [],
    })

    const handleAddLink = () => {
        setProjectData({
            ...projectData,
            links: [...projectData.links, { link_name: "", link_address: "" }], // Add a new link object
          });
    }

    const handleRemoveLink = (index) => {
        const updatedLinks = projectData.links.filter((_, i) => i !== index); // Remove the selected link
        setProjectData({ ...projectData, links: updatedLinks });
    }

    const handleLinkChange = (index, field, value) => {
        const updatedLinks = [...projectData.links];
        updatedLinks[index][field] = value; // Update specific field (link_name or link_address)
        setProjectData({ ...projectData, links: updatedLinks });
    }


    const handleSubmit = async () =>  {
        try {
         
            const response = await postClubs(projectData).unwrap();
            alert('Clubs Message Posted successfully!');
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
                        <h2 className="text-lg font-bold mb-2" >Add New Club Message</h2>

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
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="details">
                                    Details
                                </label>
                                <textarea className="w-[320px] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="details" type="text" placeholder="details" 
                                onChange={(event)=>{
                                    setProjectData(prevData => {
                                        return{
                                            ...prevData ,
                                            details : event.target.value
                                        }
                                    })
                                }}
                                >
                                </textarea>
                            </div>

                            {projectData.links.map((link, index) => (
                                <div key={index} className="flex items-center mb-2">
                                <input
                                    type="text"
                                    placeholder="Link Name"
                                    value={link.link_name}
                                    onChange={(e) =>
                                    handleLinkChange(index, "link_name", e.target.value)
                                    }
                                    className="border p-2 mr-2"
                                />
                                <input
                                    type="text"
                                    placeholder="Link Address"
                                    value={link.link_address}
                                    onChange={(e) =>
                                    handleLinkChange(index, "link_address", e.target.value)
                                    }
                                    className="border p-2 mr-2"
                                />
                                <button
                                    onClick={() => handleRemoveLink(index)}
                                    className="bg-red-500 text-white px-3 py-1 rounded"
                                >
                                    Remove
                                </button>
                                </div>
                            ))}

                            <div className="mb-4 flex justify-center">
                                <button className='text-white text-md font-medium bg-cyan-500 hover:bg-cyan-600 py-1 px-3 rounded-full'
                                 onClick={handleAddLink}
                                >
                                    Add Link
                                </button>
                            </div>

                            <div className="flex items-center justify-between">
                            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick ={handleSubmit}
                            >
                                Submit
                            </button>
                            <button 
                                onClick={closePopup} 
                                className=" bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded"
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
}

export default AddClubMessage
