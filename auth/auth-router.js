const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const db = require("../data/dbConfig.js");
const tokenService = require("./token-service")


router.post("/register", (req, res) => {
  const user = req.body;
  let { name, email, username, password } = req.body;

  if (!name) {
    res.status(400).json({
      error: "Please provide a name"
    });
  } else if (!email) {
    res.status(400).json({
      error: "Please provide an email address"
    });
  } else if (!username || username.length < 7) {
    res.status(400).json({
      error: "Please provide a username that is at least six characters."
    });
  } else if (!password || password.length < 7 ) {
    res.status(400).json({
      error: "Please provide a password that is at least six characters."
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
            const token = tokenService.generateToken(user);
            res.status(201).json({username, token});
          })
          .catch(error => {
            res.status(500).json({
              error: "There was an error while saving the user to the database."
            });
          });
      })
      .catch(error => {
        res.status(400).json({
          error: "This username or email already exists!"
        });
      });
  }
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username) {
    res.status(400).json({
      error: "Please provide a username"
    });
  } else if (!password) {
    res.status(400).json({
      error: "Please provide a password"
    });
  } else {
    db("users")
      .returning("id")
      .where({ username })
      .first()
      .then(user => {
        if (!user) {
          res.status(401).json({
            error: "Username does not exist"
          });
        } else if (user && !bcrypt.compareSync(password, user.password)) {
          res.status(401).json({
            error: "The password is incorrect"
          });
        } else {
          const token = tokenService.generateToken(user);
          res.status(200).json({username, token});
        }
      })
      .catch(error => {
        res.status(500).json({
          error: "There was an error while logging in."
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
