const User = require("../models/user");

const createUser = async (req, res) => {
  const { username, password } = req.body;
  newUser = await User.create({ username, password });
  const token = newUser.createJWT();
  res.json({ username, password, token });
};

const login = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (!user) {
    return res
      .status(404)
      .json({ msg: "No user found with that name / password" });
  }
  const token = user.createJWT();
  res.status(200).json({ user, token });
};

module.exports = {
  createUser,
  login,
};
