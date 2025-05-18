import {  Router } from "express";
import { User } from "../mongoose/schemas/user.mjs";
import {body, validationResult } from 'express-validator'
import "../strategies/local-strategy.mjs"
import passport from "passport";
import  jwt  from "jsonwebtoken";
import { verifyUser } from "../strategies/jwt-auth.mjs";
import { verifyToken } from "../strategies/jwt-auth.mjs";
const routerAuth = Router();

//registering 
routerAuth.post("/api/register" ,async (req ,res)=>{

    const {body} = req ;
    try{
        const newuser = new User(body)
        const savedUser = await newuser.save()
        return res.status(200).send({
            status : "registered successfully",
            errors  : ""
        })
    }catch(error){

         // Check if the error is a Mongoose validation error
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



//update register
routerAuth.post("/api/register/update", verifyToken ,async (req ,res)=>{

    if(!req.user){
       return res.status(500).send({
            error : "not authendicated"
        })
    }

    const {body} = req;
    

    try{
       
        if(body.newMessage){
            delete body.newMessage
            const user = await User.findById(req.user.id);
            if (!user) {
                console.log('User not found!');
                return;
            }
            user.club_messages.push(body);

            await user.save();
        }else{
            const updatedUser = await User.findByIdAndUpdate(
                req.user.id,
                { $set : body },
                { new: true, runValidators: true }
            )
            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
        }
        

        return res.status(200).json({
            errors : "",
            status : "profile updated successfully"
        })

    }catch (error){

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

//login
routerAuth.post("/api/login" ,
    verifyUser ,
    (req,res)=>{
        
    const user_type = req.user.user_type === "student" ? false : true ;
    
    res.status(200).send({
        error : "",
        status : "successfully loggedIn",
        userId : req.user._id,
        userName : req.user.name,
        type : user_type
    })
},
(err, req, res, next) => {
    // Handle unexpected errors
    if (err) {
        return res.status(500).json({  errors: err.message });
    }

    // Handle authentication failure
    res.status(401).json({ message: 'Authentication failed. Invalid credentials.' });
}
)

// login Through JWT

// routerAuth.post("/api/login" ,
//      async (req,res , next)=>{

//    try{
//     const userExists = await User.findOne({ email: req.body.user });

//     if (!userExists)
//         return res.status(400).send({ message: "user does not exist" });
  
//       // check if password is correct
//     if (userExists.password !== req.body.password)
//         return res.status(400).send({ message: "incorrect password" });

//     const accessToken = jwt
//       .sign(
//         {
//           id: userExists._id,
//         },
//         "d45ce50d12db9a0be0d5a42993740de1f09858812409eabf542ea7d90e5ca27ca98d13a776db878fc76563e8bcd6a4d812c1d146b9dca7ed45dab9f347858c76",
//         { expiresIn: "1d" }
//       )

    
//     res.status(200).send({
//         error : "",
//         status : "successfully loggedIn",
//         accessToken: accessToken
//     })
//    }catch(error){
//     console.log(error);
//     next(error);
//    }
// }
// )


export default routerAuth ;