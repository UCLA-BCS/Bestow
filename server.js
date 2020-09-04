const express = require("express");
const path = require("path");
const session = require("express-session");
var db = require("./models");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "client/build")));

require("./routes/apiRoutes")(app);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
