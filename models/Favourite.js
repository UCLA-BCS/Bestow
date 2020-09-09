const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FavouriteSchema = new Schema({
  owner: {
    type: String,
    required: true,
  },
  shop: {
    type: String,
  },
  category: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  specialInstructions: {
    type: String,
    required: true,
  },
});

const Favourite = mongoose.model("Favourite", FavouriteSchema);

module.exports = Favourite;
