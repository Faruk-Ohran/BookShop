const express = require("express");
const router = express.Router();
const Books = require("../models/bookData");

router.get("/", (req, res) => {
  Books.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {});
});

module.exports = router;
