const express = require("express");
const bcrypt = require("bcrypt");
const Users = require("../models/UsersModel");
const router = express.Router();
const auth = require("../middleware/auth");

const usernameOrPasswordError = {
  status: "error",
  message: "username or password error",
};

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  // const username = req.body.username
  // const password = req.body.password
  const user = await Users.findOne({ username });

  if (user === null) {
    return res.status(401).send(usernameOrPasswordError);
  }

  const result = await bcrypt.compare(password, user.password);
  if (result) {
    req.session.currentUser = user.username;
    req.session.userID = user.id;
    res.json({ status: "ok", message: "user logged in" });
  } else {
    req.session.currentUser = null;
    req.session.userID = null;
    res.status(401).send(usernameOrPasswordError);
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.json({ status: "ok", message: "logged out" });
  });
});

router.get("/profile", auth, (req, res) => {
  if (req.session.currentUser) {
    res.json({ status: "ok", message: "profile" });
  } else {
    res.status(403).json({ status: "error", message: "please login" });
  }
});

module.exports = router;
