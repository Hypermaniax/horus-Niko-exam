const AppError = require("../utils/errorHandler");
const { verify } = require("../utils/jwt");

const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      throw new AppError("Unauthorized, token missing", 401);
    }
    const decode = verify(token, process.env.SECRET_KEY);
    req.user = decode;
    next();
  } catch (error) {
    throw new AppError("Unauthorized, token invalid", 401);
  }
};

module.exports = verifyToken;
