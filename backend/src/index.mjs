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
app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true 
}))

app.use(express.json());
app.use(session({
    secret : process.env.SECRET_KEY,
    saveUninitialized : false ,
    resave : false,
    cookie : {
        maxAge : 60000 * 60 //1 hour validity ,
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