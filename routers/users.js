const express = require("express");
const router = express.Router();
const User = require("../models/user.js");

const getUsers = require("../controllers/control.js");
const getUser = require("../controllers/control.js");
const createUser = require("../controllers/control.js");
const updateeUser = require("../controllers/control.js");
const deleteUser = require("../controllers/control.js");

// Get users
router.get("/", getUsers);

// Get single User
router.get("/:id", getUser);

// create user
router.post("/", createUser);

//Update User
router.patch("/:id", updateeUser);

//delete User
router.delete("/:id", deleteUser);

module.exports = router;
