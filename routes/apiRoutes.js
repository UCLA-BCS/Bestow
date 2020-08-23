const axios = require("axios");
const mongoose = require("mongoose");
const db = require("../models");
const argon2 = require("argon2");
const session = require("express-session");

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
  // SESSION COOKIE
  // ================================================================

  app.use(
    session({
      name: "sid",
      saveUninitialized: false,
      resave: false,
      secret: process.env.SECRET_KEY,
      cookie: {
        maxAge: 288000000,
        sameSite: true,
      },
    })
  );

  // ================================================================
  // API ROUTES
  // ================================================================
};
