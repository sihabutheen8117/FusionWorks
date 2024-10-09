import { Router } from "express";
import { User } from "../mongoose/schemas/user.mjs";

const router = Router();

router.post("/api/register" ,async (req ,res)=>{
    const {name , email , password} = req.body ;
    const newuser = new User(req.body)
    const savedUser = await newuser.save()
    console.log(savedUser)
    console.log("finally succesfully received")
})

router.post("/api/register/update", async (req ,res)=>{

})

router.post("/api/login" ,async(req,res)=>{

})



export default router ;