const express = require('express') // import express
const dotenv = require('dotenv').config() // import dotenv to use .env file for environment variables
const port = process.env.PORT || 5000 // set port to 5000 or whatever is in .env file

const app = express() // create express app and initialize it

app.get('/api/goals', (req, res) => {
  res.json({message: 'Get goals'})
})

app.listen(port, () => console.log(`Server is running on port ${port}`))