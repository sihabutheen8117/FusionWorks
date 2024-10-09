import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors';
import routerAuth from './Route/Auth.mjs';
import cookieParser from 'cookie-parser'
import session from 'express-session'
import routerMain from './Route/Main.mjs';
import routerUser from './Route/User.mjs';


const app = express()
const PORT = process.env.PORT || 3005



mongoose.connect('mongodb://localhost/fusionworks')
.then(()=>console.log(`Connected to Database`))
.catch((err)=>console.log(`Error : ${err}`))

app.use(cors())
app.use(express.json());
app.use(session({
    secret : "fusionworks dev",
    saveUninitialized : false ,
    resave : false,
    cookie : {
        maxAge : 60000*60, // 1 hour valid cookie
    }
}));
app.use(cookieParser())

// routers
app.use(routerAuth)
app.use(routerMain)
app.use(routerUser)



app.listen(PORT , ()=>{
    console.log(`Running on PORT : ${PORT}`)
})