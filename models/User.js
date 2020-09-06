let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    password: {
      type: String,
      required: true,
    },
  },
  {
    allergies: {
      type: String,
    },
  },
  {
    dietaryRestrictions: {
      type: String,
    },
  }
);

let User = mongoose.model("User", UserSchema);

module.exports = User;
