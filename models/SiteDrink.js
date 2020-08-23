let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let SiteDrinkSchema = new Schema(
  {
    owner: {
      type: String,
      required: true,
    },
  },
  {
    coffeeShop: {
      type: String,
    },
  },
  {
    isHot: {
      type: Boolean,
    },
  },
  {
    drinkName: {
      type: String,
      required: true,
    },
  },
  {
    specialInstructions: {
      type: String,
      required: true,
    },
  }
);

let SiteDrink = mongoose.model("SiteDrink", SiteDrinkSchema);

module.exports = SiteDrink;
