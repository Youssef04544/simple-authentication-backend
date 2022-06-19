require("dotenv");

const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("We rolling boyz");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
