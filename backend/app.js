const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

//Requests
app.get("/", (req, res) => {
  res.send("App is running");
});
app.post("/", (req, res) => {});

app.listen(port, () => console.log(`listening on port ${port}`));
