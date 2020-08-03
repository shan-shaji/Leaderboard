//FILENAME: db.js

const mongoose = require("mongoose");

// Mongo url
const MONOGURI = "mongodb://localhost:27017/leaderboard";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONOGURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database!!");
  } catch (e) {
    console.log(e);
  }
};

module.exports = InitiateMongoServer;
