const middleware = require("./middleware");
const express = require("express");

const authRouter = require("../auth/auth-router");

const server = express();
middleware(server);

server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.send(`<h1>MyJournal API</h1>`)
})

module.exports = server;