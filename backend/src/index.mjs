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
import dotenv from 'dotenv'


dotenv.config()
const app = express()
const PORT = process.env.PORT || 3005


//connecting to the database
// 'mongodb://localhost/fusionworks'
mongoose.connect(process.env.MONGODB_CONNECT)
.then(()=>console.log(`Connected to Database`))
.catch((err)=>console.log(`Error : ${err}`))


//registering to main route

// https://fusionworks-frontend.onrender.com
app.use(cors({
    origin: 'https://sihabutheen8117.github.io/FusionWorks/', 
    credentials: true 
}))

app.use(express.json());

//parsin the cookie
app.use(cookieParser())

app.use(session({
    secret : process.env.SECRET_KEY,
    saveUninitialized : false ,
    resave : false,
    cookie : {
        maxAge : 60000 * 60,
        secure: true,       // Ensures cookies are only sent over HTTPS
        sameSite: 'strict',
    },
    store : MongoStore.create({
        client : mongoose.connection.getClient(),
    })
}));

//passport

app.use(passport.initialize())
app.use(passport.session())



// routers
app.use(routerAuth)
app.use(routerMain)
app.use(routerUser)
app.use(routerClub)



app.listen(PORT , ()=>{
    console.log(`Running on PORT : ${PORT}`)
})