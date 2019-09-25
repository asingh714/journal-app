const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const db = require("../data/dbConfig.js");

router.post("/register", (req, res) => {
  const user = req.body;
  let { name, email, username, password } = req.body;

  if (!name) {
    res.status(400).json({
      error: "Please provide a name"
    });
  } else if (!email) {
    res.status(400).json({
      error: "Please provide an email"
    });
  } else if (!username) {
    res.status(400).json({
      error: "Please provide a username"
    });
  } else if (!password) {
    res.status(400).json({
      error: "Please provide a password"
    });
  } else {
    const hash = bcrypt.hashSync(password, 14);
    user.password = hash;
    db("users")
      .insert(user)
      .returning("id")
      .then(ids => {
        const id = ids[0];
        db("users")
          .where({ id })
          .first()
          .then(user => {
            res.status(201).json(user);
          })
          .catch(error => {
            res.status(500).json({
              error: "There was an error while saving the user to the database."
            });
          });
      })
      .catch(error => {
        res.status(400).json({
          error: "This username already exists!"
        });
      });
  }
});

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
