const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
    let token = req.headers.securitytoken || req.headers.securityToken;
    jwt.verify(token, req.app.get('superSecret'), (err, decoded) => {
        if (err) {
            res.status(500).send('');
        }
        else {
            if (decoded.id == req.headers.userid) {
                req.decoded = decoded;
                next();
            }
            else {
                res.status(401).send('');
            }
        }
    });
}

module.exports = protect;