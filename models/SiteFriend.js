let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let SiteFriendSchema = new Schema(
  {
    friendInitiator: {
      type: String,
      required: true,
    },
  },
  {
    friendReceiver: {
      type: String,
      required: true,
    },
  }
);

let SiteFriend = mongoose.model("SiteFriend", SiteFriendSchema);

module.exports = SiteFriend;
