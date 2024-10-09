import { response, Router } from "express";
import { User } from "../mongoose/schemas/user.mjs";

const routerAuth = Router();

routerAuth.post("/api/register" ,async (req ,res)=>{
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

routerAuth.post("/api/login" ,async(req,res)=>{

})



export default routerAuth ;