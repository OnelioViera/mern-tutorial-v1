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