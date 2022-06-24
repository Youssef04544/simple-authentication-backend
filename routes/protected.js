const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).send("you got access to this top secret protected info !");
});

module.exports = router;
