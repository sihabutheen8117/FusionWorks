import passport from "passport";
import { Strategy } from "passport-local";


passport.serializeUser((user ,done) => {
    done(null ,user)
})

passport.deserializeUser((user ,done)=>{
    try {
        //find user

        const user = "" //find user

        if(!user) throw new Error("user not found")
        done(null ,user)

    }catch(err){
        done(err,null)
    }
})


export default passport.use(
    new Strategy({usernameField : "email"},(username,password,done)=>{
        try{
            const user = "" //find the user from mongodb

            if(!user) throw new Error("user not found")
            if(user.password != password) throw new Error("Invalid credentials")
            done(null ,user)
        }
        catch(err){
            done(err ,null)
        }
    })
)