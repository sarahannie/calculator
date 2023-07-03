const express = require("express");
const router = express.Router();
const calRoutes = require("./calculate");

router.use("/calculations", calRoutes);

module.exports = router;
