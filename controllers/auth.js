const user = require("../models/user");

const createUser = async (req, res) => {
  const { username, password } = req.body;
  newUser = user.create({ username, password });
  res.json({ username, password });
};

module.exports = {
  createUser,
};
