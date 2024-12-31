const mongoose = require('mongoose');

const dbName = process.env.DB_NAME; // Name of the database
const dbUser = process.env.DB_USER; // MongoDB username
const dbPass = process.env.DB_PASS; // MongoDB password
const dbContainer = 'mongodb';

const mongoURI = `mongodb://${dbContainer}:27017`;


async function dbConnect() {
  mongoose.connection.on('connected', () => {
    console.log('Connected: ', dbName);
  });
  // Connect to MongoDB
  await mongoose.connect(mongoURI, {
    dbName,
  });
}

module.exports = dbConnect;


/* onst mongoose = require('mongoose');

const dbName = process.env.DB_NAME; // Name of the database
const dbUser = process.env.DB_USER; // MongoDB username
const dbPass = process.env.DB_PASS; // MongoDB password
const dbContainer = 'mongodb';

const mongoURI = `mongodb://${dbUser}:${dbPass}@${dbContainer}:27017/${dbName}?authSource=root`;



async function dbConnect() {
  mongoose.connection.on('connected', () => {
    console.log('Connected: ', dbName);
  });
  // Connect to MongoDB
  await mongoose.connect(mongoURI, {
    dbName,
  });
}

module.exports = dbConnect;
  */