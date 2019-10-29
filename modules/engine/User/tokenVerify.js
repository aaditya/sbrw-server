const jwt = require('jsonwebtoken');
const ecr = require('../Miscellaneous/crypt');
const { logger } = require('../../../utils/logger');

const protect = (req, res, next) => {
    let token = req.headers.securitytoken || req.headers.securityToken;

    if (token) {
        // Decrypts the token.
        ecr.ucrypt(token, (err, decrypt) => {
            if (err) {
                res.json({
                    success: false,
                    msg: 'Failed to authenticate token.'
                });
            } else {
                // verifies secret and checks exp
                jwt.verify(decrypt, req.app.get('tokenSign'), (err, decoded) => {
                    if (err) {
                        logger.info(err.message);
                        res.status(500).send();
                    }
                    else {
                        req.decoded = decoded;
                        next();
                    }
                });
            }
        });

    }

    else {
        res.status(500).send('No Token.')
    }
}

module.exports = protect;
