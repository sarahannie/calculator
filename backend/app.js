const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

//Requests
app.get("/", (req, res) => {});
app.post("/", (req, res) => {});

app.listen(3001, () => console.log("listening on port 3001"));
