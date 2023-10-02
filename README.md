# MERN Tutorial-v1
## Backend Development

1. Open a terminal and create a new directory for the project called `mern-tutorial` and `cd` into it and open in your coder.  
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

13. Change the `port` variable back to `5000` in the `server.js` file, because we will be using port `8000` for the frontend.

### Creating Routes

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
  res.json({message: 'Get goals'})
})

app.listen(port, () => console.log(`Server is running on port ${port}`))
```
4. Now make a GET request to `http://localhost:5000/api/goals` and you should see the following in the response:
```json
{
  "message": "Get goals"
}
```