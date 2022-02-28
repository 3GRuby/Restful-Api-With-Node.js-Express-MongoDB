const express = require("express");
const router = express.Router();
const User = require("../models/user.js");

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.send("get request" + error);
    }
};

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.send(user);
    } catch (error) {
        res.send("get request" + error);
    }
};

const createUser = async (req, res) => {
    const user = new User({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub,
    });
    try {
        const a = await user.save();
        res.json(a);
    } catch (error) {
        res.send(error);
    }
};

const updateUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        user.sub = req.body.sub;
        const a = await user.save();
        res.json(a);
    } catch (error) {
        res.send("error");
    }
};

const deleteUser = async (req, res) => {
    try {
        const removeUser = await User.remove({ _id: req.params.id });
        res.json(removeUser);
    } catch (error) {
        res.send("error");
    }
};

module.exports = getUsers;
module.exports = getUser;
module.exports = createUser;
module.exports = updateUser;
module.exports = deleteUser;
