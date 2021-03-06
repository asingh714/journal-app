const middleware = require("./middleware");
const express = require("express");

const authRouter = require("../auth/auth-router");
const quotesRouter = require("../quotes/quotes-router");
const entriesRouter = require("../journal-entries/entries-router");

const server = express();
middleware(server);

server.use("/api/auth", authRouter);
server.use("/api/quotes", quotesRouter);
server.use("/api/entries", entriesRouter);


server.get("/", (req, res) => {
  res.send(`<h1>MyJournal API</h1>`)
})

module.exports = server;