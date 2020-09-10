const express = require("express");

// const path = require("path");
// var db = require("./models");
// 6-8 added from 11 react-router
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

const PORT = process.env.PORT || 3001;

const app = express();

//Middleware defined here
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Static assets (for heroku)
// app.use(express.static(path.join(__dirname, "client/build")));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// require("./routes/apiRoutes")(app);
// Add routes, both API and view
app.use(routes);


// // Testing base backend
// app.get("/test", (req, res) => {
//   res.send("Works");
// });

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "/client/build/index.html"));
// });


// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");


// Start the API server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
