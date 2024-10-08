import { Router } from "express";
import { User } from "../mongoose/schemas/user.mjs";

const router = Router();

router.post("/api/register" ,async (req ,res)=>{
    const {name , email , password} = req.body ;
    const newuser = new User(req.body)
    const savedUser = await newuser.save()
    console.log(savedUser)
    console.log("succesfully received")
})

router.post("/api/login" ,(req,res)=>{

})

export default router ;