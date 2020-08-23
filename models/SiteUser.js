let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let SiteUserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    password: {
      type: String,
    },
  },
  {
    allergies: {
      type: Boolean,
    },
  },
  {
    dietaryRestrictions: {
      type: String,
      required: true,
    },
  }
);

let SiteUser = mongoose.model("SiteUser", SiteUserSchema);

module.exports = SiteUser;
