import { response, Router } from "express";
import { User } from "../mongoose/schemas/user.mjs";
import {body ,validationResult} from 'express-validator'

const routerAuth = Router();

routerAuth.post("/api/register" ,
    [
        body('name')
        .trim()
        .notEmpty()
        .withMessage("name cannot be empty")
        .isLength({min : 3 , max :32})
        .withMessage("name should be 3>= and 32<=")
        .isString()
        .withMessage("name should not contain numeric value"),

        body('email')
        .trim()
        .notEmpty()
        .withMessage("email cannot be empty")
        .isEmail()
        .withMessage("invalid mail address"),

        body('password')
        .notEmpty()
        .withMessage("password cannot be empty")
        .isLength({min : 8 , max : 32})
        .withMessage("password length should be 8<= and <=32")
    ],
    async (req ,res)=>{
    const {name , email , password} = req.body ;
    // const newuser = new User(req.body)
    // const savedUser = await newuser.save()
    console.log("from /api/register")
    req.sessionStore.get(req.session.id ,(err ,user)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(user)
        }
    })
    console.log(req.session);
    console.log(req.session.id)
    req.session.visited = true 
    res.status(201).send({
        name : name ,
        email : email ,
        password : password,
        status : "registered",
    })
})


routerAuth.post("/api/register/update", async (req ,res)=>{
    console.log(req.session.id)
    res.status(201).send({
        status : "updated",
    })
})

routerAuth.post("/api/login" , [
    body('email')
        .trim()
        .notEmpty()
        .withMessage("email cannot be empty")
        .isEmail()
        .withMessage("invalid mail address"),

        body('password')
        .notEmpty()
        .withMessage("password cannot be empty")
        .isLength({min : 8 , max : 32})
        .withMessage("password length should be 8<= and <=32")
],async(req,res)=>{

    const result = validationResult(req);
    console.log(result);
})



export default routerAuth ;