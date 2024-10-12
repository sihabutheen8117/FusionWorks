import { Router } from "express";
import { Projects } from "../mongoose/schemas/Projects.mjs";

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
            creator : req.user.id
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
        const updateProject =await Projects.findByIdAndUpdate(
            id,
            { $set : body },
            { new: true, runValidators: true }
        )
        if(!updateProject){
            return res.status(404).json({
                errors : "cant update project"
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