import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors';
import routerAuth from './Route/Auth.mjs';
import cookieParser from 'cookie-parser'
import passport from "passport";
import session from 'express-session'
import routerMain from './Route/Main.mjs';
import routerUser from './Route/User.mjs';
import routerClub from './Route/Clubs.mjs';
import MongoStore from "connect-mongo"

const app = express()
const PORT = process.env.PORT || 3005


//connecting to the database
mongoose.connect('mongodb://localhost/fusionworks')
.then(()=>console.log(`Connected to Database`))
.catch((err)=>console.log(`Error : ${err}`))


//registering to main route
app.use(cors())
app.use(express.json());
app.use(session({
    secret : "fusionworks dev",
    saveUninitialized : false ,
    resave : false,
    cookie : {
        maxAge : 60000, // 1 hour valid cookie
    },
    store : MongoStore.create({
        client : mongoose.connection.getClient(),
    })
}));

//passport

app.use(passport.initialize())
app.use(passport.session())

//parsin the cookie
app.use(cookieParser())

// routers
app.use(routerAuth)
app.use(routerMain)
app.use(routerUser)
app.use(routerClub)



app.listen(PORT , ()=>{
    console.log(`Running on PORT : ${PORT}`)
})