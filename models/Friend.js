let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let FriendSchema = new Schema({
  friendInitiator: {
    type: String,
    required: true,
  },
  friendReceiver: {
    type: String,
    required: true,
  },
});

let Friend = mongoose.model("Friend", FriendSchema);

module.exports = Friend;
