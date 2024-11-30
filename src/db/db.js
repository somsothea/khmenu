const mongoose = require('mongoose');

const dbName = process.env.DB_NAME; // Name of the database
const dbUser = process.env.DB_USER; // MongoDB username
const dbPass = process.env.DB_PASS; // MongoDB password
const dbCotainer = 'mongodb';
// Test editing
// MongoDB connection URI
//const mongoURI = `mongodb://${dbCotainer}:27017`;
// MongoDB connection URI
const mongoURI = `mongodb://${dbUser}:${dbPass}@${dbCotainer}:27017`;

async function dbConnect() {
  // Event listeners for mongoose connection
  mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB:', dbName);
  });

  mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
  });

  try {
    // Connect to MongoDB
    await mongoose.connect(mongoURI, {
      dbName,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connection established successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error; // Rethrow error to be handled by the caller
  }
}
/*
async function dbConnect() {
  mongoose.connection.on('connected', () => {
    console.log('Connected: ', dbName);
  });
  // Connect to MongoDB
  await mongoose.connect(mongoURI, {
    dbName,
  });
}
*/
module.exports = dbConnect;
