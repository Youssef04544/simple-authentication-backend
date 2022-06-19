const express = require("express");

const router = express.Router();

router.route("/").get((req, res) => res.send("sup boi"));

module.exports = router;
