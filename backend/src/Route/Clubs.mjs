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
        catch (err) {
            if (err.name === "ValidationError"){
                const errorMessages = {};

                for (let field in err.errors) {
                    errorMessages[field] = err.errors[field].message;
                }
      
                // Log the entire error object for debugging
                console.log('Validation Error Details:', err);

                // Send a response with the error details
                return res.status(400).send({
                    message: 'Validation error',
                    errors: errorMessages,
                });
            }
            else {
                res.status(500).send({ error: 'Server error' });
              }
        }

 })

export default routerClub;