const jwt = require('jsonwebtoken');
const ecr = require('../Miscellaneous/crypt');

const protect = (req, res, next) => {
  const token = req.headers.securitytoken || req.headers.securityToken;

  if (token) {
    // Decrypts the token.
    ecr.ucrypt(token, (err, decrypt) => {
      if (err) {
        res.json({
          success: false,
          msg: 'Failed to authenticate token.',
        });
      } else {
        // verifies secret and checks exp
        jwt.verify(decrypt, req.app.get('tokenSign'), (err, decoded) => {
          if (err) {
            console.log(err.message);
            res.status(500).send();
          } else {
            req.decoded = decoded;
            next();
          }
        });
      }
    });
  } else {
    res.status(500).send('No Token.');
  }
};

module.exports = protect;
