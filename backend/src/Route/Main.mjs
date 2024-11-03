import { Router } from "express";
import { Events } from "../mongoose/schemas/Events.mjs";
import { Projects } from "../mongoose/schemas/Projects.mjs";
import { Discussion } from "../mongoose/schemas/discussion.mjs";

const routerMain = Router()

routerMain.get("/api/events" ,async (req,res)=>{

    if(!req.user){
        return res.status(401).send({
            error : "not authendicated"
        })
    }

    try {
        const events = await Events.find();

        // const eventsWithCount = events.map( (event)=>({
        //     ...event.toObject(),
        //     no_of_application : event.applied.length || 0
        // }))

        res.status(200).send(events)
    }
    catch (err) {
        console.log(err)
        res.status(500).send({
            status : "error while fetching events",
            errors : err
        })
    }

})

routerMain.get("/api/projects" ,async (req,res)=>{

    if(!req.user){
        return res.status(401).send({
            error : "not authendicated"
        })
    }

    try{
        const projects = await Projects.find();
        res.status(200).send(projects)

    }catch (err){
       
        res.status(500).send({
            status : "error while fetching projects",
            error : err
        })
    }


})

routerMain.get("/api/discussionForum" ,async (req,res)=>{
    if(!req.user){
        return res.status(401).send({
            error : "not authendicated"
        })
    }

    try{
        const messages = await Discussion.find();
        res.status(200).json(messages)
    }catch(err){

        res.status(500).send({
            status : "error while fetching messages",
            error : err
        })

    }

    
})

export default routerMain ;