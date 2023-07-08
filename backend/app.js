require('dotenv').config();
const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("./logger/appLogger")
const port = process.env.PORT || 3000;

const config = require("./config");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //support parsing of application /x-www-form-urlencoded post data
app.use(cors());

//db
mongoose.connect(config.connect, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
//checking if db has connected
db.once("open", () => {
  logger.log("connected to db");
});
db.on("error", (err) => {
  logger.error(err);
});

//import routes
const apiRoutes = require("./routes/api");
const { loggers } = require("winston");

//Requests
app.get("/", (req, res) => {
  res.send("App is running");
});

app.use("/api", apiRoutes);

app.listen(port, () => console.log(`listening on port ${port}`));
