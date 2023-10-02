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

