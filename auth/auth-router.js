const express = require("express");
const router = express.Router();
// const bcrypt = require("bcryptjs");

const db = require("../data/dbConfig.js");

router.get("/test", (req, res) => {
  db("users")
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json({
        error: "There was an error while logging in."
      });
    });
});

module.exports = router;
