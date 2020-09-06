const jwt = require('jsonwebtoken');
const ecr = require('../Miscellaneous/crypt');

const protect = async (req, res, next) => {
  try {
    const token = req.headers.securitytoken || req.headers.securityToken;
    if (!token) return res.status(500).send('No Token.');

    const decr = await ecr.ucrypt(token);

    const decoded = jwt.verify(decr, process.env.SECRET_KEY);
    req.decoded = decoded;

    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = protect;
