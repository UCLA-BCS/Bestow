require("dotenv").config();
const express = require("express");
const path = require("path");
const session = require("express-session");
var db = require("./models");
var mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.static(path.join(__dirname + "client/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/apiRoutes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bestow");

app.get("*", (req, res) => {
  res.sendfile(path.join((__dirname = "client/build/index.html")));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
