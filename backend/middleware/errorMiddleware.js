const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500 // If res is not null, set statusCode to res.status else set it to 500 


  res.status(statusCode) // Set statusCode to res.statusCode
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  })
}

module.exports = {
  errorHandler,
}
