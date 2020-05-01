const express = require("express");
const router = express.Router();
const Knjige = require("../models/data");

router.get("/", (req, res) => {
  Knjige.find({})
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});

module.exports = router;
