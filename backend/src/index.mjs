import express from 'express'
import mongoose from 'mongoose'


const app = express()
const PORT = process.env.PORT || 3005
mongoose.connect('mongodb://localhost/fusionworks')
.then(()=>console.log(`Connected to Database`))
.catch((err)=>console.log(`Error : ${err}`))


app.listen(PORT , ()=>{
    console.log(`Running on PORT : ${PORT}`)
})