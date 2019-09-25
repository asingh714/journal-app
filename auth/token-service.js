const jwt = require("jsonwebtoken");

const secrets = require("../api/secrets");

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const secret = secrets.jwtSecret;

  const options = {
    expiresIn: "10d"
  };

  return jwt.sign(payload, secret, options);
}

module.exports = {
  generateToken
}