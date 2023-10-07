const express = require('express') // import express
const colors = require('colors') // import colors to use colors in console
const dotenv = require('dotenv').config() // import dotenv to use .env file for environment variables
const { errorHandler } = require('./middleware/errorMiddleware') // import errorHandler from errorMiddleware.js
const connectDB = require('./config/db') // import connectDB from db.js
const port = process.env.PORT || 5000 // set port to 5000 or whatever is in .env file

connectDB() // connect to database

const app = express() // create express app and initialize it

app.use(express.json()) // use express.json() to parse json data  
app.use(express.urlencoded({extended: false})) // use express.urlencoded() to parse urlencoded data

app.use('/api/goals', require('./routes/goalRoutes')) // use goalRoutes.js for /api/goals

app.use(errorHandler) // use errorHandler to handle errors

app.listen(port, () => console.log(`Server is running on port ${port}`)) // listen on port and log message to console