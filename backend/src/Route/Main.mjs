import { Router } from "express";
import { Events } from "../mongoose/schemas/Events.mjs";

const routerMain = Router()

routerMain.get("/api/events" ,async (req,res)=>{

    try {
        const events = await Events.find();

        const eventsWithCount = events.map( (event)=>({
            ...event.toObject(),
            no_of_application : event.applied.length
        }))

        res.status(200).json(eventsWithCount)
    }
    catch (err) {
        console.log(err)
        res.status(500).send({
            error : "error while fetching events"
        })
    }

})

routerMain.get("/api/projects" ,async (req,res)=>{

})

routerMain.get("/api/discussionForum" ,async (req,res)=>{
    
})

export default routerMain ;