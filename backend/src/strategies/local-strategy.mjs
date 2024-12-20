import passport from "passport";
import { Strategy } from "passport-local";
import { User } from "../mongoose/schemas/user.mjs";


passport.serializeUser((user ,done) => {
    console.log("serializer")
    done(null ,user._id)
})

passport.deserializeUser(async (id,done)=>{
    console.log("deserializer")
    try {
        const user = await User.findById({
            _id : id
        })

        if(!user) throw new Error("user not found")
    
        done(null ,user)

    }catch(err){
        console.error("Error during deserialization:", err);
        done(err,null)
    }
})


export default passport.use(
    new Strategy({usernameField : "user"},async (username,password,done)=>{
     
        try{
            const user = await User.findOne({
                email : username
            })

            if(!user) throw new Error("user not found")
            if(user.password != password) throw new Error("Invalid credentials")
            done(null ,user)
        }
        catch(err){
            done(err ,null)
        }
    })
)