let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let FavouriteSchema = new Schema({
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

let Favourite = mongoose.model("Favourite", FavouriteSchema);

module.exports = Favourite;
