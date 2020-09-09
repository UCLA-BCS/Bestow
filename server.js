const express = require("express");
const path = require("path");
var db = require("./models");

const PORT = process.env.PORT || 3001;

const app = express();

//Middleware defined here
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Static assets (for heroku)
app.use(express.static(path.join(__dirname, "client/build")));

require("./routes/apiRoutes")(app);

// Testing base backend
app.get("/test", (req, res) => {
  res.send("Works");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

// Start the API server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
