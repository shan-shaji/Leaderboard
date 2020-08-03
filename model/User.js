// FILENAME: User.js
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  leaderBoardData: {
    type: Array,
  },
});

// export model userwith USerSchema
module.exports = mongoose.model("user", UserSchema);
