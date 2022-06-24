const express = require("express");
const router = express.Router();
const { createUser, login } = require("../controllers/auth");

router
  .route("/register")
  .get((req, res) => res.send("register page"))
  .post(createUser);
router
  .route("/login")
  .get((req, res) => res.send("login page"))
  .post(login);

module.exports = router;
