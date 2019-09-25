const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const db = require("../data/dbConfig.js");