require("dotenv").config();
const axios = require("axios");
const mongoose = require("mongoose");
const db = require("../models");
const argon2 = require("argon2");

mongoose.Promise = Promise;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const mongooseConnection = mongoose.connection;

// If there is an error while connecting, it logs the error
mongooseConnection.on(
  "error",
  console.error.bind(console, "connection error:")
);

// When mongoose connects, it console logs that it's connected
mongooseConnection.once("open", function () {
  console.log("Connected to Database");
});

module.exports = (app) => {
  // ================================================================
  // API ROUTES
  // ================================================================
  // =====>
  // GET
  //======>

  // To re-add

  // =====>
  // POST
  //======>

  // Takes in variables "username" & "password", checks whether they exist, and, if not, creates a user with said credentials

  app.post("/register", async (req, res) => {
    const { username, password } = req.body;

    const hashword = await argon2.hash(password);

    await db.SiteUser.findOne({ name: username }, "name", (err, resp) => {
      if (err) return handleError(err);
    }).then((resp) => {
      if (resp === null) {
        db.SiteUser.create({
          name: username,
          password: hashword,
        })
          .then((resp) => {
            res.send(resp);
          })
          .catch((err) => res.json(err));
      }
    });
  });
};
