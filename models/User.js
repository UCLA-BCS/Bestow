const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  allergies: {
    type: String,
  },
  dietaryRestrictions: {
    type: String,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
