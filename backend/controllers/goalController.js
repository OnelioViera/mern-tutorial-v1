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