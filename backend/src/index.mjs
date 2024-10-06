import express from 'express'
import mongoose from 'mongoose'
import passport from 'passport'


const app = express()
const PORT = process.env.PORT || 3000
mongoose.connect('mongodb://localhost/fusionworks')
.then(()=>console.log(`Connected to Database`))
.catch((err)=>console.log(`Error : ${err}`))


app.use(passport.initialize())
app.use(passport.session())

app.listen(PORT , ()=>{
    console.log(`Running on PORT : ${PORT}`)
})