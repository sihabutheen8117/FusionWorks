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
import MongoDBStore from "connect-mongodb-session";

const mongoStore = MongoDBStore(session);


dotenv.config()
const app = express()
const PORT = process.env.PORT || 3005


//connecting to the database
// 'mongodb://localhost/fusionworks'
//process.env.MONGODB_CONNECT
mongoose.connect(process.env.MONGODB_CONNECT)
.then(()=>console.log(`Connected to Database`))
.catch((err)=>console.log(`Error : ${err}`))


//registering to main route

// https://fusionworks-frontend.onrender.com
// https://fusionworks8117.netlify.app
app.use(cors({
    origin: 'https://fusionworks-frontend.onrender.com', 
    methods : ['GET' , "POST" , 'PUT' , 'DELETE'], 
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
        httpOnly : true,
        secure: true,       // Ensures cookies are only sent over HTTPS
        sameSite: 'none',
        domain : '.onrender.com'
    },
    // store : MongoStore.create({
    //     client : mongoose.connection.getClient(),
    // })

    store : new mongoStore({
        collection: "userSessions",
        uri: "mongodb+srv://sihabutheen8117:5g3s0nuLL9YSvj8h@fusionworks.goncn.mongodb.net/?retryWrites=true&w=majority&appName=FusionWorks",
        expires: 10000* 1000,
      }),
}));

app.use((req, res, next) => {
    const originalSetHeader = res.setHeader;
    res.setHeader = function (name, value) {
        if (name === 'Set-Cookie' && Array.isArray(value)) {
            value = value.map(cookie => `${cookie}; Partitioned`);
        }
        originalSetHeader.call(this, name, value);
    };
    next();
});
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