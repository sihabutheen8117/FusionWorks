import { Router } from "express";
import { Events } from "../mongoose/schemas/Events.mjs";

const routerClub = Router();

routerClub.post("/api/postEvent/" ,
    async (req, res)=>{

        const {body} = req;
        try {
            const event = new Events(body);
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

export default routerClub;