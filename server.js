require("dotenv").config();
const express = require("express");
const session = require("express-session");
var db = require("./models");
var mongoose = require ("mongoose")

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.static(__dirname + "/public/"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/apiRoutes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bestow")

console.log(process.env.APIKey)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
