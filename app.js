require("dotenv").config();
require("express-async-errors");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

const Authrouter = require("./routes/auth");
const ProtectedRouter = require("./routes/protected");
const authenticateUser = require("./middleware/authenticate");

const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use("/api/v1", Authrouter);
app.use("/api/v1/protectedInfo", authenticateUser, ProtectedRouter);

app.listen(PORT, async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Listening on port ${PORT}...`);
  } catch (error) {
    console.log(error);
  }
});
