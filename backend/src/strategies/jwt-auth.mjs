import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
import { User } from '../mongoose/schemas/user.mjs';

dotenv.config();

export const verifyToken = (req, res, next )=>{
    const token = req.cookies.token ;
    console.log("from the verifyToken");
    console.log(token);
    if(!token) return res.status(401).send({
        message : "Access denied"
    });

    jwt.verify(token , process.env.SECRET_KEY , async (err , decodedToken)=>{
        if (err) return res.status(403).send({ message: "Invalid Token" });
        try{
            const user = await User.findOne({
                email : decodedToken.email
            })
    
            if(!user){
                return res.status(401).send({
                    message : "Access denied"
                })
            }
            req.user = user ;
            next();
        }
        catch(err){
            next(err);
        }
    })
}

export const verifyUser = async (req , res , next ) => {
    const body = req.body ;
    try{
        const user = await User.findOne({
            email : body.user
        })

        if(!user){
            return res.status(401).send({
                message : "Access denied"
            })
        }

        if(user.password != body.password) 
        {
            return res.status(400).send({
                message : "Invalid password"
            })
        }
        res.cookie("token", genToken(body.user), { httpOnly: true ,
            secure : true ,
            sameSite : "None"
         });
        req.user = user ;
        next();
    }
    catch(err){
        next(err);
    }
}

const genToken = ( username)=>{
    const accessToken = jwt.sign( {email : username} , process.env.SECRET_KEY , {
        expiresIn : process.env.TOKEN_EXPIRY
    })

    return accessToken ;
}
