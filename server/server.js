const mongoose = require("mongoose");
const path = require("path");
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const { DB } = require("./config");
const router = require("./routes");

const API_PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());

const dbRoute = DB;

mongoose.connect(dbRoute, { useNewUrlParser: true }, function(err) {
  if (err) return console.log(err);
  app.listen(3000, function() {
    console.log("Server is listening");
  });
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

app.use("/api", router);

const publicPath = path.join(__dirname, "build");
app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
