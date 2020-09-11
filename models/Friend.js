let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let FriendSchema = new Schema({
  initiator: {
    type: String,
    required: true,
  },
  receiver: {
    type: String,
    required: true,
  },
});

let Friend = mongoose.model("Friend", FriendSchema);

module.exports = Friend;
