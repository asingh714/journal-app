/* 

date - ?  
grateful 3 - string
great 3 - string
daily affirmation - string  
how i feel - number 

amazing 3 - string 
better 1 - string 
how i feel - number
*/

const express = require("express");
const router = express.Router();

const db = require("../data/dbConfig");

router.get("/", (req, res) => {
  db("entries")
    .then(entries => {
      res.status(200).json(entries);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "The journal entries could not be retrieved" });
    });
});

module.exports = router;
