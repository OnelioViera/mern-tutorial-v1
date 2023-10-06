const express = require('express') // import express
const dotenv = require('dotenv').config() // import dotenv to use .env file for environment variables
const port = process.env.PORT || 5000 // set port to 5000 or whatever is in .env file

const app = express() // create express app and initialize it

app.use('/api/goals', require('./routes/goalRoutes')) // use goalRoutes.js for /api/goals

app.listen(port, () => console.log(`Server is running on port ${port}`)) // listen on port and log message to console