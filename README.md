![MERN](https://miro.medium.com/v2/0*hU4zJiyVwWcM0L-w.png)

# MERN Tutorial-v1
## Backend Development

<details>
<summary>Backend Environment setup and Dependencies</summary>
<ul>
<li><a href="https://nodejs.org/en" target="_blank">Node.js</a></li>
<li><a href="https://expressjs.com/" target="_blank">Express</a></li>
<li><a href="https://www.npmjs.com/package/dotenv" target="_blank">dotenv</a></li>
<li><a href="https://mongoosejs.com/" target="_blank">mongoose</a></li>
<li><a href="https://chrisyeh96.github.io/2020/03/28/terminal-colors.html" target="_blank">colors</a></li>
<li><a href="https://www.npmjs.com/package/nodemon" target="_blank">nodemon</a></li>
</ul>
</details>

<details>
<summary>Setup Backend Development</summary>

1. Open a terminal and create a new directory for the project called `mern-tutorial` and `cd` into it and open it in your coder.  
    - Create a file named `backend` in the `root directory`.

    **(All the routes, controllers and models will be located in this folder.)** 

    - Create a file in the `backend` folder named `server.js`
    - In your terminal run `$ npm init` to initialize a new Node.js project.

2. Create a ``.gitignore`` file in the root directory and add the following lines to it:
```
node_modules
.env
```
3. Install the following dependencies:
```
$ npm i express dotenv mongoose colors
```
```
$ npm i -D nodemon
```
4. Open the `package.json` file and remove the current lines from the `scripts` object and add the following lines:
```json
"start": "node backend/server.js",
"server": "nodemon backend/server.js"
```
5. Add the following line to your `server.js` file:
```js
console.log('Hello World');
```
6. In your terminal run `$ npm run server` to start the server using nodemon to run the `server.js` file. You should see `Hello World` in the terminal.

7. Create a Git repository using `git init` and push your code to GitHub.

8. Clear the `server.js` file and replace with the following code:
```js
const express = require('express') // import express
const dotenv = require('dotenv').config() // import dotenv to use .env file for environment variables
const port = 5000 // set port to 5000

const app = express() // create express app and initialize it

app.listen(port, () => console.log(`Server is running on port ${port}`))
```
9. Run `$ npm run server` in the terminal and you will see "**Server is running on port 5000**".

10. Create a `.env` file in the root directory and add the following lines to it:
```js
NODE_ENV = development
PORT = 8000
```
11. Replace the `port` variable in the `server.js` file with the following code:
```js
const port = process.env.PORT || 5000
```
12. Running `$ npm run server` in the terminal will now show "**Server is running on port 8000**".

13. Change the `port` variable back to `5000` in the `server.js` file, because port `8000` will be used for the frontend.
</details>

<details>
<summary>Creating Routes</summary>

1. Replace the code in the `server.js` file with the following code to test the routes:
```js
const express = require('express') // import express
const dotenv = require('dotenv').config() // import dotenv to use .env file for environment variables
const port = process.env.PORT || 5000 // set port to 5000 or whatever is in .env file

const app = express() // create express app and initialize it

app.get('/api/goals', (req, res) => {
  res.send('Get goals')
})

app.listen(port, () => console.log(`Server is running on port ${port}`))
```
2. Open up Postman [https://www.postman.com/](https://www.postman.com/ "Postman") and make a GET request to `http://localhost:5000/api/goals` and you should see `Get goals` in the response and a status 200 OK.

3. Now replace the code in the `server.js` file with the following code to utilize the `json` data:
```js
const express = require('express') // import express
const dotenv = require('dotenv').config() // import dotenv to use .env file for environment variables
const port = process.env.PORT || 5000 // set port to 5000 or whatever is in .env file

const app = express() // create express app and initialize it

app.get('/api/goals', (req, res) => {
  res.status(200).json({message: 'Get goals'})
})

app.listen(port, () => console.log(`Server is running on port ${port}`))
```
4. Now make a GET request to `http://localhost:5000/api/goals` and you should see the following in the response:
```json
{
  "message": "Get goals"
}
```
5. Create a `routes` folder in the `backend` folder and create a file named `goalRoutes.js` in the `routes` folder.

6. Remove the `app.get` route from the `server.js` file and add the following code to the `goalRoutes.js` file:
```js
const express = require('express') // import express
const router = express.Router() // import express router

router.get('/', (req, res) => {
  res.status(200).json({message: 'Get goals'})
}) // create a GET route

module.exports = router // export the router
```
7. Change the `server.js` file to the following code:
```js
const express = require('express') // import express
const dotenv = require('dotenv').config() // import dotenv to use .env file for environment variables
const port = process.env.PORT || 5000 // set port to 5000 or whatever is in .env file

const app = express() // create express app and initialize it

app.use('/api/goals', require('./routes/goalRoutes')) // use goalRoutes.js for /api/goals

app.listen(port, () => console.log(`Server is running on port ${port}`))
```
8. Now make a GET request to `http://localhost:5000/api/goals` and you should see the following in the response:
```json
{
  "message": "Get goals"
}
```
9. Create a `routes` folder in the `backend` folder and create a file named `goalController.js` in the `routes` folder.  Add the following code to the `goalController.js` file to create a controller for the `GET` route:
```js
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({message: 'Get goals'})
})

module.exports = router
```
When you make a GET request to `http://localhost:5000/api/goals` you should see the following in the response:
```json
{
  "message": "Get goals"
}
```
10. Modify the `goalRouters.js` file to the following code to include the get, post, put and delete routes:
```js
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({message: 'Get goal'})
})

router.post('/', (req, res) => {
  res.status(200).json({message: 'Set goal'})
})

router.put('/:id', (req, res) => {
  res.status(200).json({message: `Update goal ${req.params.id}`})
})

router.delete('/:id', (req, res) => {
  res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = router
```
Using Postman you can test the routes.

11. Make a GET request to `http://localhost:5000/api/goals` and you should see the following in the response:
```json
{
  "message": "Get goal"
}
```
12. Now make a POST request to `http://localhost:5000/api/goals` and you should see the following in the response:
```json
{
  "message": "Set goal"
}
```

13. Now make a PUT request to `http://localhost:5000/api/goals/1` and you should see the following in the response:
```json
{
  "message": "Update goal 1"
}
```
14. Now make a DELETE request to `http://localhost:5000/api/goals/1` and you should see the following in the response:
```json
{
  "message": "Delete goal 1"
}
```
</details>

<details>
<summary>Creating Controllers</summary>

1. Create a `controllers` folder in the `backend` folder and create a file named `goalController.js` in the `controllers` folder.  Add the following code to the `goalController.js` file to create a controller for the `GET`, `POST`, `PUT`, and `DELETE` routes:
```js
// @desc Get all goals
// @route GET /api/goals
// @access Private
const getGoals = (req, res) => {
  res.status(200).json({message: 'Get all goals'})
}

// @desc  Set goal
// @route POST /api/goals
// @access Private
const setGoal = (req, res) => {
  res.status(200).json({message: 'Set goals'})
}

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = (req, res) => {
  res.status(200).json({message: `Update goal ${req.params.id}`})
}

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = (req, res) => {
  res.status(200).json({message: `Delete goal ${req.params.id}`})
}

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}
```
2. Now modify the `goalRouters.js` file to the following code to include the get, post, put and delete routes:
```js
const express = require('express') // Import express
const router = express.Router() // Make router
const { 
  getGoals, 
  setGoal, 
  updateGoal, 
  deleteGoal 
} = require('../controllers/goalController') // Import controller

router.route('/').get(getGoals).post(setGoal) // Get all goals and create new goal

router.route('/:id').delete(deleteGoal).put(updateGoal) // Delete goal and update goal

module.exports = router // Export router
```

3. Update the `server.js` file to the following code:
```js
const express = require('express') // import express
const dotenv = require('dotenv').config() // import dotenv to use .env file for environment variables
const port = process.env.PORT || 5000 // set port to 5000 or whatever is in .env file

const app = express() // create express app and initialize it

app.use('/api/goals', require('./routes/goalRoutes')) // use goalRoutes.js for /api/goals

app.listen(port, () => console.log(`Server is running on port ${port}`)) // listen on port and log message to console
```
4. Now make a GET request to `http://localhost:5000/api/goals` and you should see the following in the response:
```json
{
  "message": "Get all goals"
}
```
5. Now make a POST request to `http://localhost:5000/api/goals` and you should see the following in the response:
```json
{
  "message": "Set goals"
}
```
6. Now make a PUT request to `http://localhost:5000/api/goals/1` and you should see the following in the response:
```json
{
  "message": "Update goal 1"
}
```
7. Now make a DELETE request to `http://localhost:5000/api/goals/1` and you should see the following in the response:
```json
{
  "message": "Delete goal 1"
}
```
</details>

<details>
<summary>Creating Middleware</summary>

1. Create a folder named `middleware` in the backend folder.  In the `middleware` folder add a `errorMiddleware.js` file and add the following code to it:
```js
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500

  res.status(statusCode)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
}

module.exports = {
  errorHandler,
}
```
2. Update the `server.js` file to the following code:
```js
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
```

3. Run the following line `npm i espress-async-handler` in the terminal to in stall `asyncHandler`. Also update the `controllers/goalController.js` file to the following code:
```js
const asyncHandler = require('express-async-handler')

// @desc Get all goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'Get all goals'})
})

// @desc  Set goal
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => { // asyncHandler wraps async functions so that errors can be handled with errorHandler
  if(!req.body.text) { // if text field is empty
    res.status(400) // express sets status code to 200 by default
    throw new Error('Please add a text field') // throw error to be handled by error middleware
  }
  res.status(200).json({message: 'Set goals'}) // send json response
})

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Update goal ${req.params.id}`})
})

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}
```
</details>

<details>
<summary>Connect to MongoDB</summary>

1. Once you have created a mongoDB Atlas project, create a `config` folder in the `backend` folder and create a file named `db.js` in the `config` folder.  Add the following code to the `db.js` file:
```js
const mongoose = require('mongoose') // Import mongoose to use it for database connection

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI) // Connect to database

    console.log(`MongoDb connected: ${conn.connection.host}`.cyan.underline) // Log message to console
  } catch (error) {
    console.log('error') // Log error
    process.exit(1) // Exit with failure
  }
}

module.exports = connectDB // Export connectDB function to use in server.js
```
</details>

<details>

<summary>Creating Models</summary>

1. Create a `models` folder in the `backend` folder and create a file named `goalModel.js` in the `models` folder.  Add the following code to the `goalModel.js` file:
```js
const mongoose = require('mongoose') // Import mongoose

const goalSchema = mongoose.Schema( // Create schema
  {
    text: {
      type: String,
      requires: [true, 'Please add a text field']
    }
  },
  {
    timestamps: true
  }) // Create timestamps

module.exports = mongoose.model('Goal', goalSchema) // Export model
```
</details>

## Frontend Development
