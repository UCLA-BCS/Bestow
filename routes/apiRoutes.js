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

  // Takes in variables "username", "password", "allergies" (not required) & "dietaryRestrictions", checks whether there's a user called "username", and, if not, creates a user with said credentials

  app.post("/register", async (req, res) => {
    const { username, password, allergies, dietaryRestrictions } = req.body;

    const hashword = await argon2.hash(password);

    await db.User.findOne({ name: username }, "name", (err, resp) => {
      if (err) return handleError(err);
    }).then((resp) => {
      if (resp === null) {
        db.User.create({
          name: username,
          password: hashword,
          allergies: allergies,
          dietaryRestrictions: dietaryRestrictions,
        })
          .then((resp) => {
            res.send(resp);
          })
          .catch((err) => res.json(err));
      }
    });
  });

  // Takes in "username" and "password". Checks database for object of username; compares password given and password stored using the hasher (argon2)

  app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    db.User.findOne({ name: username }, "username", (err, resp) => {
      if (err) {
        res.send("Couldn't find username");
      }
    })
      .then(async (resp) => {
        var checkPass = resp.password;

        const valid = await argon2.verify(checkPass, password);

        if (valid) {
          res.send("Correct Login");
        } else {
          res.send("There was a problem");
        }
      })
      .catch((err) => {
        res.send(err);
      });
  });
};
