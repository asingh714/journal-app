const express = require("express");
const router = express.Router();

const db = require("../data/dbConfig");

router.get("/", (req, res) => {
  db("quotes")
  .then(quotes => {
    res.status(200).json(quotes);
  })
  .catch(error => {
    res.status(500).json({ error: "The quotes could not be retrieved." })
  })
})

module.exports = router;