const axios = require("axios");
const mongoose = require("mongoose");
const db = require("../models");
const argon2 = require("argon2");
const session = require("express-session");

// mongoose.Promise = Promise;

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const mongooseConnection = mongoose.connection;

// // If there is an error while connecting, it logs the error
// mongooseConnection.on(
//   "error",
//   console.error.bind(console, "connection error:")
// );

// // When mongoose connects, it console logs that it's connected
// mongooseConnection.once("open", function () {
//   console.log("Connected to Database");
// });

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

  // =====>
  // GET
  //======>
  app.get("/user-drinks", async (req, res) => {
    var queryUser = req.body.queryUser;

    await db.SiteDrink.find({ owner: queryUser }, "owner", (err, resp) => {
      if (err) return handleError(err);
    }).then((resp) => {
      res.send(resp);
    });
  });

  app.get("/user-friends", async (req, res) => {
    var queryUser = req.body.queryUser;

    await db.SiteFriends.find({
      $or: [{ friendInitiator: queryUser }, { friendReceiver: queryUser }],
    }).then((resp) => {
      res.send(resp);
      // check each of these to see if the reverse is true (confirmed friend)
      // ... there's gotta be a more optimized way of doing that. Research, Mark.
    });
  });

  // =====>
  // POST
  //======>
  app.post("/register", async (req, res) => {
    const { username, password } = req.body;

    const hashword = await argon2.hash(password);

    await db.User.findOne({ username: username }, "username", (err, resp) => {
      if (err) return handleError(err);
    }).then((resp) => {
      if (resp === null) {
        db.User.create({
          username: username,
          password: hashword,
        })
          .then((resp) => {
            req.session.user = username;
            res.send(req.session);
          })
          .catch((err) => res.json(err));
      }
    });
  });

  app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    await db.User.findOne(
      { username: username },
      "username password",
      (err, resp) => {
        if (err) return handleError(err);
      }
    )
      .then(async (resp) => {
        var searchSet = resp.password;

        const valid = await argon2.verify(searchSet, password);

        if (valid) {
          req.session.user = resp.username;
          res.send(req.session);
        } else {
          res.send(req.session);
        }
      })
      .catch((err) => {
        res.send(err);
      });
  });

  app.post("/add-drink", async (req, res) => {
    var currentUser = req.session.user;

    await db.SiteDrink.create({
      owner: currentUser,
      coffeeShop: req.body.coffeeShop,
      isHot: req.body.isHot.value,
      drinkName: req.body.drinkName,
      specialInstructions: req.body.specialInstructions,
    }).then((resp) => {
      res.send(resp);
    });
  });

  app.post("/add-friend", async (req, res) => {
    var currentUser = req.session.user;

    await db.SiteFriend.create({
      friendInitiator: currentUser,
      friendReceiver: req.body.receier,
    }).then((resp) => {
      res.send(resp);
    });
  });

  app.post("/confirm-friend", async (req, res) => {
    var currentUser = req.session.user;

    await db.SiteFriend.find({
      friendInitiator: req.body.initiator,
      friendReceiver: currentUser,
    }).then((resp) => {
      // if this isn't empty, add a friend code in the reverse
    });
  });
};
