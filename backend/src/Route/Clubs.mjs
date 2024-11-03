import { Router } from "express";
import { Events } from "../mongoose/schemas/Events.mjs";

const routerClub = Router();

routerClub.post("/api/events/post" ,
    async (req, res)=>{

        if(!req.user){
            return res.status(401).json({
                status : "not authendicated"
            })
        }

        const {body} = req;
        try {
            const event = new Events({
                ...body ,
                creator : {
                    id : req.user.id ,
                    name : req.user.name,
                }
            });
            const savedEvent = await event.save();
            console.log(savedEvent)
            res.status(200).send({
                status : "event is successfully posted"
            })
        }
        catch(error){
            if (error.name === 'ValidationError') {
                // Extract the validation errors and send them to the user
                const validationErrors = {} ;
                Object.keys(error.errors).forEach((field) => {
                    validationErrors[field] = error.errors[field].message;
                });
                return res.status(400).json({ errors: validationErrors });
            }
    
            // Check for duplicate key error (E11000)
            if (error.code === 11000) {
                const duplicateKey = Object.keys(error.keyValue)[0]; // Get the field causing the duplicate key error
                const duplicateValue = error.keyValue[duplicateKey];
                return res.status(400).json({
                    error: `Duplicate value for ${duplicateKey}: '${duplicateValue}' already exists. Please choose another one.`
                });
            }
    
            // Handle other errors
            return res.status(500).json({ message: 'Server error' , err : error.message });
              
        }

 })

 routerClub.post("/api/events/update/:id" , async (req ,res)=> {

    if(!req.user){
        return res.status(401).json({
            status : "not authendicated"
        })
    }

    const id = req.params.id;

    try{
        const updateEvents = await Events.findByIdAndUpdate(
            id,
            { $set : body },
            { new: true, runValidators: true }
        )
        if(!updateEvents){
            return res.status(404).json({
                errors : "cant update events"
            })
        }

        return res.status(200).json({
            status : "event updated",
            errors : ""
        })

    }catch(error){
        if (error.name === 'ValidationError') {
            // Extract the validation errors and send them to the user
            const validationErrors = {} ;
            Object.keys(error.errors).forEach((field) => {
                validationErrors[field] = error.errors[field].message;
            });
            return res.status(400).json({ errors: validationErrors });
        }

        // Check for duplicate key error (E11000)
        if (error.code === 11000) {
            const duplicateKey = Object.keys(error.keyValue)[0]; // Get the field causing the duplicate key error
            const duplicateValue = error.keyValue[duplicateKey];
            return res.status(400).json({
                error: `Duplicate value for ${duplicateKey}: '${duplicateValue}' already exists. Please choose another one.`
            });
        }

        // Handle other errors
        return res.status(500).json({ message: 'Server error' , err : error.message });
    }

 })


 routerClub.delete("/api/events/delete/:id" , async (req ,res)=>{

    if(!req.user){
        return res.status(401).json({
            status : "not authendicated"
        })
    }

    const id = req.params.id;

    try {
        
        const deletedEvents = await Events.findByIdAndDelete(id);
    
        if (!deletedEvents) {
            return res.status(404).json({
                errors: "Events not found or already deleted"
            });
        }
    
        return res.status(200).json({
            status: "Events deleted successfully"
        });
    } catch (error) {
        return res.status(500).json({
            errors: "Server error",
            message: error.message
        });
    }
 }
 )

export default routerClub;