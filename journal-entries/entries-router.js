const express = require("express");
const router = express.Router();

const db = require("../data/dbConfig");
const restricted = require("../auth/restricted");

router.post("/", restricted, (req, res) => {
  const entry = req.body;

  if (!entry.date) {
    res
      .status(400)
      .json({ error: "Please provide a date for the journal entry." });
  } else {
    entry.user_id = req.decodedToken.subject;
    db("entries")
      .returning("id")
      .insert(entry)
      .then(ids => {
        const id = ids[0];
        db("entries")
          .where({ id })
          .first()
          .then(entry => {
            res.status(201).json(entry);
          });
      })
      .catch(error => {
        res.status(500).json({
          error:
            "There was an error while saving the journal entry to the database."
        });
      });
  }
});

router.get("/", restricted, (req, res) => {
  db("entries")
    .returning("id")
    .where({ user_id: req.decodedToken.subject })
    .then(entries => {
      if (!entries) {
        res.status(404).json({ error: "There are no entries for this user" });
      }
      res.status(200).json(entries);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "The journal entries could not be retrieved" });
    });
});

router.get("/:id", restricted, (req, res) => {
  const { id } = req.params;
  db("entries")
    .returning("id")
    .where({ id, user_id: req.decodedToken.subject })
    .first()
    .then(entry => {
      if (entry) {
        res.status(200).json(entry);
      } else {
        res.status(404).json({
          error: "You cannot access the journal entry with this specific id."
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        error: "The journal entry with the specified ID could not be retrieved."
      });
    });
});

router.put("/:id", restricted, (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  if (!changes.date) {
    res.status(400).json({
      error: "Please provide a date for the journal entry."
    });
  } else {
    db("entries")
      .returning("id")
      .where({ id, user_id: req.decodedToken.subject })
      .update(changes)
      .then(count => {
        if (count > 0) {
          res.status(200).json(count);
        } else {
          res.status(404).json({
            error: "You cannot access the journal entry with this specific id."
          });
        }
      })
      .catch(error => {
        res
          .status(500)
          .json({ error: "The journal entry could not be modified." });
      });
  }
});

router.delete("/:id", restricted, (req, res) => {
  const { id } = req.params;

  db("entries")
    .where({ id, user_id: req.decodedToken.subject })
    .del()
    .returning("id")
    .then(count => {
      if (count > 0) {
        res.status(200).json(count);
      } else {
        res.status(404).json({
          error: "You cannot access the journal entry with this specific id."
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        error: "The journal entry could not be removed."
      });
    });
});

module.exports = router;
