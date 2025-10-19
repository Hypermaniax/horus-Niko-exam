const jwt = require("jsonwebtoken");

const generateJWT = (payload) => {
  const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "2h" });

  return token;
};

const verify = (token, secret) => {
  const verifyToken = jwt.verify(token, secret);
  return verifyToken;
};

module.exports = { generateJWT, verify };
