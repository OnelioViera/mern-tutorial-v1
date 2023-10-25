const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')

// @desc Get all goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find() // find method returns all goals

  res.status(200).json(goals)
})

// @desc  Set goal
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => { // asyncHandler wraps async functions so that errors can be handled with errorHandler
  if(!req.body.text) { // if text field is empty
    res.status(400) // express sets status code to 200 by default
    throw new Error('Please add a text field') // throw error to be handled by error middleware
  }
  const goal = await Goal.create({
    text: req.body.text
  }) // create method creates a new goal

  res.status(200).json(goal) // send json response
})

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id) // find goal by id

  if(!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedGoal)
})

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  if(!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }

  await goal.remove()

  res.status(200).json({id: req.params.id})
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}