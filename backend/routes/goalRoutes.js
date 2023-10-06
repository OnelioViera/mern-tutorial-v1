const express = require('express') // Import express
const router = express.Router() // Make router from express
const { 
  getGoals, 
  setGoal, 
  updateGoal, 
  deleteGoal 
} = require('../controllers/goalController') // Import controller functions 

router.route('/').get(getGoals).post(setGoal) // Get all goals and create new goal

router.route('/:id').delete(deleteGoal).put(updateGoal) // Delete goal and update goal

module.exports = router // Export router to use in server.js