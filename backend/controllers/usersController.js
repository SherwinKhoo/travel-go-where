const express = require("express");
const bcrypt = require("bcrypt");
const Users = require("../models/UsersModel");
const router = express.Router();
const auth = require("../middleware/auth");

const usernameOrPasswordError = {
  status: "error",
  message: "username or password error",
};

router.post("/new", async (req, res) => {
  try {
    console.log(req.body);
    req.body.password = await bcrypt.hash(req.body.password, 10);
    console.log(req.body.password);
    const createdUser = new Users(req.body);
    const savedUser = await createdUser.save();
    console.log(savedUser);

    // console.log("created user is:", createdUser);
    res.json({ status: "ok", message: "user created" });
  } catch (error) {
    console.log(error);
    res.status(401).json(usernameOrPasswordError);
  }
});

router.delete("/remove", async (req, res) => {
  const { username } = req.body;
  const message = await Users.deleteOne({ username });

  if (message.deletedCount === 1) {
    res.json({ status: "ok", message: "user deleted" });
  } else {
    res.json({ status: "error", message: "problem with deleting user" });
  }
});

module.exports = router;
