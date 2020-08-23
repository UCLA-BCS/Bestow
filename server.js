require("dotenv").config();
const express = require("express");
const session = require("express-session");
var db = require("./models");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.static(__dirname + "/public/"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/apiRoutes")(app);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
