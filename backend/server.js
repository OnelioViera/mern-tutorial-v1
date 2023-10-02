const express = require('express') // import express
const dotenv = require('dotenv').config // import dotenv to use .env file for environment variables
const port = 5000 // set port to 5000

const app = express() // create express app and initialize it

app.listen(port, () => console.log(`Server is running on port ${port}`))