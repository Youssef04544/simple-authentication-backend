const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/auth");

router
  .route("/")
  .get((req, res) => res.send("sup boi"))
  .post(createUser);

module.exports = router;
