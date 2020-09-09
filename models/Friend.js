const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FriendSchema = new Schema({
  friendInitiator: {
    type: String,
    required: true,
  },
  friendReceiver: {
    type: String,
    required: true,
  },
});

const Friend = mongoose.model("Friend", FriendSchema);

module.exports = Friend;
