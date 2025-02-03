// const express = require('express')
// const dotenv = require('dotenv')
// const app = express()
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'

import bookRouter from './route/book.route.js'
// import userRouter from "./route/user.route.js" 
import userRouter from './route/user.route.js'
// const port = 3000
const app = express()


app.use(cors())
app.use(express.json()) //middleware

dotenv.config();
const PORT=process.env.PORT || 4000
const URI=process.env.MongoDb

    //connect to mongodb
    try {
        mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
            console.log('connected to mongodb');
        
    } catch (error) {
        console.log('error',error);
        
    }

app.get('/', (req, res) => {
  res.send('Hello World welcome to my new world!')
})

//defining routes 
app.use('/book',bookRouter)
app.use('/user',userRouter)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})