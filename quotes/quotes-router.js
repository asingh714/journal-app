const express = require("express");
const router = express.Router();

const db = require("../data/dbConfig");

router.get("/", (req, res) => {
  db("quotes")
    .returning("id")
    .then(quotes => {
      res.status(200).json(quotes);
    })
    .catch(error => {
      res.status(500).json({ error: "The quotes could not be retrieved." });
    });
});

router.post("/", (req, res) => {
  const input = req.body;

  if (!input.author || !input.quote) {
    res
      .status(400)
      .json({ error: "Need an author and quote for the quote input" });
  } else {
    db("quotes")
      .returning("id")
      .insert(input)
      .then(ids => {
        const id = ids[0];
        db("quotes")
          .returning("id")
          .where({ id })
          .first()
          .then(quote => {
            res.status(201).json(quote);
          });
      })
      .catch(error => {
        res.status(500).json({
          error: "There was an error while saving the quote to the database."
        });
      });
  }
});

module.exports = router;
