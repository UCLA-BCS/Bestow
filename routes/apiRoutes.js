require("dotenv").config();
const mongoose = require("mongoose");
const db = require("../models");
const argon2 = require("argon2");

mongoose.Promise = Promise;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/", {
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

  // ------------------------->> FAVOURITES ----------------------------->>
  //========================================================>
  // SEE ALL FAVOURITES OF GIVEN USER
  // Takes in a user's name (not id) and returns all Favourites associated with them.
  app.get("/favourite/getall/:queryuser", async (req, res) => {
    var queryUser = req.params.queryuser;

    await db.Favourite.find({ owner: queryUser }, (err, resp) => {
      if (err) return handleError(err);
    }).then((resp) => {
      res.send(resp);
    });
  });

  //========================================================>
  // GET SPECIFIC FAVOURITE
  // Takes in the id of a favourite and returns all its fields.
  app.get("/favourite/get/:id", async (req, res) => {
    var queryId = req.params.id;

    await db.Favourite.findOne({ _id: queryId }, (err, resp) => {
      if (err) return handleError(err);
    }).then((resp) => {
      res.send(resp);
    });
  });

  // ------------------------->> USERS ----------------------------->>
  //====================================================
  // Get current User information
  app.get("/user", function (req, res) {
    if (req.session.name) {
      db.User.find({ name: req.session.name }).then((results) => {
        const userInfo = {
          _id: results[0]._id,
          name: results[0].name,
          firstName: results[0].firstName,
          lastName: results[0].lastName,
          allergies: results[0].allergies,
          dietaryRestrictions: results[0].dietaryRestrictions,
        };
        res.json(userInfo);
      });
    } else {
      res.send("unauthorized");
    }
  });

  // =====>
  // POST
  //======>
  // ------------------------->> USERS ----------------------------->>
  //========================================================>
  // REGISTER USER
  // Takes in variables "name", "password", "allergies" (not required) & "dietaryRestrictions", checks whether there's a user called "name", and, if not, creates a user with said credentials

  app.post("/register", async (req, res) => {
    const {
      name,
      firstName,
      lastName,
      password,
      allergies,
      dietaryRestrictions,
    } = req.body;

    console.log(req.body);
    const hashword = await argon2.hash(password);

    await db.User.findOne({ name: name }, "name", (err, resp) => {
      if (err) return handleError(err);
    }).then((resp) => {
      if (resp === null) {
        db.User.create({
          name: name,
          firstName: firstName,
          lastName: lastName,
          password: hashword,
          allergies: allergies,
          dietaryRestrictions: dietaryRestrictions,
        })
          .then((resp) => {
            res.send(resp);
          })
          .catch((err) => res.json(err));
      } else {
        res.send("Already Exists");
      }
    });
  });

  //========================================================>
  // LOGIN USER
  // Takes in "name" and "password". Checks database for object of name; compares password given and password stored using the hasher (argon2); testing

  app.post("/login", async (req, res) => {
    const { name, password } = req.body;

    await db.User.findOne({ name: name }, "name password", (err, resp) => {
      if (err) return handleError(err);
    }).then(async (resp) => {
      if (resp !== null) {
        console.log(resp);
        var checkPass = resp.password;
        const valid = await argon2.verify(checkPass, password);

        if (valid) {
          req.session.name = name;

          res.json("We good");
        } else {
          if (req.session.name) {
            req.session.name = "";
          }
          res.json("unauthorized");
        }
      } else {
        res.send("error");
      }
    });
  });

  //========================================================>
  // UPDATE USER ALLERGIES/DIETARY
  // Given user name, new allergies and new dietary updates the user information
  app.post("/user/update", async (req, res) => {
    const { id, allergies, dietaryRestrictions } = req.body;

    await db.User.findOneAndUpdate(
      { _id: id },
      { allergies: allergies, dietaryRestrictions: dietaryRestrictions },
      (err, resp) => {
        if (err) return handleError(err);
      }
    ).then((resp) => {
      res.json(resp);
    });
  });

  // ------------------------->> FAVOURITES ----------------------------->>
  //========================================================>
  // ADD FAVOURITE
  // Takes in (1) "owner" (current user), (2) "shop", (3) "category", (4) "name" (of favourite item), and (5) "specialInstructions". Creates Favourite under owner-name.
  app.post("/favourite/add", async (req, res) => {
    const { owner } = req.body;

    await db.Favourite.create({
      owner: owner,
      shop: req.body.shop,
      category: req.body.category,
      name: req.body.name,
      specialInstructions: req.body.specialInstructions,
    }).then((resp) => {
      res.send(resp);
    });
  });

  //========================================================>
  // UPDATE FAVOURITE
  // Given "_id" of Favourite and information to change, updates item of said ID. Requires all information.
  app.post("/favourite/update/:id", async (req, res) => {
    const id = req.params.id;
    const { shop, category, name, specialInstructions } = req.body;

    await db.Favourite.findOneAndUpdate(
      { _id: id },
      {
        shop: shop,
        category: category,
        name: name,
        specialInstructions: specialInstructions,
      },
      (err, resp) => {
        if (err) return handleError(err);
      }
    ).then((resp) => {
      res.json(resp);
    });
  });

  //========================================================>
  // DELETE FAVOURITE
  // Given "_id" of Favourite, delete
  app.post("/favourite/delete/:id", async (req, res) => {
    const id = req.params.id;

    await db.Favourite.deleteOne({ _id: id }, (err, resp) => {
      if (err) return handleError(err);
    }).then((resp) => {
      res.json(resp);
    });
  });

  // ------------------------->> FRIENDS ----------------------------->>
  //========================================================>
  // ADD FRIEND
  // Given user id and friend id, add friend
  app.post("/friend/add", async (req, res) => {
    const { userID, friendID } = req.body;

    await db.Friend.findOne(
      { initiator: userID, receiver: friendID },
      (err, resp) => {
        if (err) return handleError(err);
      }
    ).then((resp) => {
      if (resp === null) {
        db.Friend.create({
          initiator: userID,
          receiver: friendID,
        })
          .then((resp) => {
            res.send(resp);
          })
          .catch((err) => res.json(err));
      } else {
        res.send(resp.body);
      }
    });
  });

  //========================================================>
  // DELETE FRIEND
  // description
  app.post("/friend/delete", async (req, res) => {
    // Get user's id
    // Get friend's id
    // Check database to see if there's already a relationship
    // If there is no relationship, add one.
  });
};
