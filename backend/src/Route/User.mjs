import { Router } from "express";
import { Projects } from "../mongoose/schemas/Projects.mjs";
import { Discussion } from "../mongoose/schemas/discussion.mjs";

const routerUser = Router()

routerUser.post("/api/project/post" ,async (req,res)=>{

    if(!req.user){
        return res.status(401).json({
            status : "not authendicated"
        })
    }

    try{
        const {body} = req ;
        console.log(body)
        const newProject = await Projects({
            ...body,
            creator : {
                id : req.user.id ,
                name : req.user.name
            } ,
            members : {
                details : [{
                    id : req.user.id ,
                    name : req.user.name
                }],
            } ,
            
        });
        const savedProject = await newProject.save();
        res.status(200).send({
            status : "project is successfully posted"
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

routerUser.post("/api/projects/update/:id" , async (req ,res)=>{

    if(!req.user){
        return res.status(401).json({
            status : "not authendicated"
        })
    }

    const {body} = req ;
    const id = req.params.id;

    try{

        const finalUpdateObject = {} ;
        if (body.newMemberId) {
            
            finalUpdateObject.$push = { members: body.newMemberId };
        }
        if (body.memberIdToRemove) {
            finalUpdateObject.$pull = { members: body.memberIdToRemove };
        }

        const updateObject = {}

        Object.keys(body).forEach(key => {
            // Check if the key is neither newMember nor MemberToDelete
            if (key !== 'newMemberId' && key !== 'memberIdToRemove') {
                updateObject[key] = body[key]; // Add the field to updateObject
            }
        });
        
        
        finalUpdateObject.$set = updateObject 
        


        const updateProject =await Projects.findByIdAndUpdate(
            id,
            finalUpdateObject,
            { new: true, runValidators: true }
        )
        if(!updateProject){
            return res.status(404).json({
                errors : "cant update project",
                message : updateProject
            })
        }

        return res.status(200).json({
            status : "projects updated",
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

routerUser.delete("/api/projects/delete/:id" , async (req ,res)=>{

    if(!req.user){
        return res.status(401).json({
            status : "not authendicated"
        })
    }

    const id = req.params.id;

    try {
        
        const deletedProject = await Projects.findByIdAndDelete(id);
    
        if (!deletedProject) {
            return res.status(404).json({
                errors: "Project not found or already deleted"
            });
        }
    
        return res.status(200).json({
            status: "Project deleted successfully"
        });
    } catch (error) {
        return res.status(500).json({
            errors: "Server error",
            message: error.message
        });
    }
})


routerUser.post("/api/discussionForum/newMessage" ,async (req, res)=> {
    if(!req.user){
        return res.status(401).json({
            status : "not authendicated"
        })
    }

    const {body }= req ;

    try{
        const newMessage = await Discussion({
            ...body ,
            creator : req.user.id
        })

        const addedMessage = await newMessage.save();

        if(!addedMessage){
            return res.status(401).json({
                error : "failed to send message"
            })
        }

        return res.status(200).json({
            status : "message sended successfully"
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

routerUser.post("/api/discussionForum/updateMessage/:id" , async (req ,res)=>{
    if(!req.user){
        return res.status(401).json({
            status : "not authendicated"
        })
    }

    try{
        const {body} = req ;
        const id = req.params.id

        const updateObject = {}

        if(body.reply){

            updateObject.$set = {
                replies : {
                    user : req.user.id,
                    message : body.reply.message,
                }
            }
        }

        if(body.removeReply){
            updateObject.$pull = {
               replies : {
                _id : body.removeReply
               }
            }
        }

        if(body.liked){
            updateObject.$push = {
                liked : req.user.id
            }
        }

        if(body.disliked){
            updateObject.$push = {
                disliked : req.user.id
            }
        }

        if(body.removeLike){
            updateObject.$pull = {
                liked : req.user.id
            }
        }

        if(body.removeDislike){
            updateObject.$pull = {
                disliked : req.user.id
            }
        }

        const updateMessage =await Discussion.findByIdAndUpdate(
            id,
            updateObject,
            { new: true, runValidators: true }
        )
        if(!updateMessage){
            return res.status(404).json({
                errors : "cant update project",
                message : updateMessage
            })
        }

        return res.status(200).json({
            status : "projects updated",
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

export default routerUser ;