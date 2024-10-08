import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors';
import router from './Route/Auth.mjs';


const app = express()
const PORT = process.env.PORT || 3005



mongoose.connect('mongodb://localhost/fusionworks')
.then(()=>console.log(`Connected to Database`))
.catch((err)=>console.log(`Error : ${err}`))

app.use(cors())
app.use(express.json());
app.use(router)



app.listen(PORT , ()=>{
    console.log(`Running on PORT : ${PORT}`)
})