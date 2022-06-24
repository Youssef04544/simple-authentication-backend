//check the JWT token
const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");

const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ msg: "Unauthorized" });
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = await jwt.verify(token, process.env.JWT_SECRET);
    //attach user to the protected route
    req.user = {
      userId: payload.userId,
      name: payload.username,
    };
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = authenticate;
