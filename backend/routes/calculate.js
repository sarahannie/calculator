const express = require("express");
const router = express.Router();
const History = require("../modals/calculations");

router.get("/", async (req, res) => {
  await History.find()
    .then((history) => {
      res.send(history);
    })
    .catch((err) => {
      res.send(err.message);
    });
});

router.post("/", async (req, res) => {
  const history = new History(req.body);
  await history
    .save()
    .then(() => {
      res.send("Succeeded!");
    })
    .catch((err) => {
      res.send("Failed to save to history!");
    });
});

module.exports = router;
