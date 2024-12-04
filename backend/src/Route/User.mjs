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

routerUser.post("/api/projects/update/" , async (req ,res)=>{

    if(!req.user){
        return res.status(401).json({
            status : "not authendicated"
        })
    }

    const {body} = req ;

    const id = body.id
    const data = body.data

    try{

        const finalUpdateObject = {} ;

        if (data.newMember === "add") {
            
            finalUpdateObject.$push = { "members.details": {
                id : req.user.id,
                name : req.user.name
            } };
        }else if (data.newMember === "remove") {

            finalUpdateObject.$pull = { "members.details": {
                id : req.user.id,
                name : req.user.name
            } };
        }

        if(data.memberToRemove){
            finalUpdateObject.$pull = {
                "members.details": {
                id : data.memberToRemove.id,
                name : data.memberToRemove.name
            } 
            }
        }

        if(data.newResources){
            finalUpdateObject.$push = {
                "members.resources" : {
                    user : req.user.id,
                    name : req.user.name,
                    desc : data.newResources.desc,
                    link : data.newResources.link
                }
            }
        }


        if(data.newMessage){
             finalUpdateObject.$push = { "members.messages" : {
                user : req.user.id,
                name : req.user.name,
                message : data.newMessage.message
             }};
        }


        const updateObject = {}

        Object.keys(data).forEach(key => {
            // Check if the key is neither newMember nor MemberToDelete
            if (key !== 'newMemberId' && key !== 'memberIdToRemove') {
                updateObject[key] = data[key]; // Add the field to updateObject
            }
        });
        
        
        finalUpdateObject.$set = updateObject 
        
        console.log(finalUpdateObject)


        const updateProject =await Projects.findByIdAndUpdate(
            id,
            finalUpdateObject,
            { new: true, runValidators: true }
        )

        if(!updateProject){
            return res.status(404).json({
                status : "cant update project",
                message : updateProject,
                success : false
            })
        }

        return res.status(200).json({
            status : "projects updated",
            success : true
        })

    }catch(error){
        if (error.name === 'ValidationError') {
            // Extract the validation errors and send them to the user
            const validationErrors = {} ;
            Object.keys(error.errors).forEach((field) => {
                validationErrors[field] = error.errors[field].message;
            });
            return res.status(400).json({ errors: validationErrors ,
                success : false
            });
        }

        // Check for duplicate key error (E11000)
        if (error.code === 11000) {
            const duplicateKey = Object.keys(error.keyValue)[0]; // Get the field causing the duplicate key error
            const duplicateValue = error.keyValue[duplicateKey];
            return res.status(400).json({
                error: `Duplicate value for ${duplicateKey}: '${duplicateValue}' already exists. Please choose another one.`,
                success : false
            });
        }

        // Handle other errors
        return res.status(500).json({ message: 'Server error' ,
             err : error.message,
            success : false
         });
    }
})

routerUser.post("/api/projects/delete/" , async (req ,res)=>{

    if(!req.user){
        return res.status(401).json({
            status : "not authendicated"
        })
    }

    const id = req.body.id

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

routerUser.post("/api/discussionForum/Message/" ,async (req, res)=> {
    if(!req.user){
        return res.status(401).json({
            status : "not authendicated"
        })
    }

    const {body }= req ;

    try{
        const newMessage = await Discussion({
            ...body ,
            creator : {
                name : req.user.name ,
                id : req.user.id
            }
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
        return res.status(500).json({ message: 'Server error' , err : error });
    }


})

routerUser.post("/api/discussionForum/Message/:id" , async (req ,res)=>{
    if(!req.user){
        return res.status(401).json({
            status : "not authendicated"
        })
    }

    try{
        const {body} = req ;
        
        const id = req.params.id

        const updateObject = {}

        updateObject.$pull = updateObject.$pull || {};
        updateObject.$push = updateObject.$push || {};

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

        if(body.reaction.liked){
            updateObject.$push.liked = req.user.id
            
        }

        if(body.reaction.disliked){
            updateObject.$push.disliked = req.user.id
            
        }

        if(!body.reaction.liked){
            updateObject.$pull.liked = req.user.id
            
        }

        if(!body.reaction.disliked){
            updateObject.$pull.disliked = req.user.id
            
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

        const discussion = await Discussion.findById(id);

        if (!discussion) {
            return res.status(404).json({
                errors: "Discussion not found"
            });
        }

        discussion.numberOfLikes = discussion.liked.length;
        discussion.numberOfDisLikes = discussion.disliked.length;

        // Step 4: Save the updated document to the database
        const disresult = await discussion.save();

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