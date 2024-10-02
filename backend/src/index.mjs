import express from 'express'
import mongodb from 'mongoose'


const app = express()
const PORT = process.env.PORT || 3000

app.listen(PORT , ()=>{
    console.log(`Running on PORT : ${PORT}`)
})