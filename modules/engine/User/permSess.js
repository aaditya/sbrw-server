const driverPersonaModel = require(__base + 'models/driverPersona.js');

const permSess = (req, res) => {
    driverPersonaModel.find({ user: req.decoded.id }, (err, doc) => {
        if (err) {
            res.status(500).send('');
        }
        else {
            let data = {
                id: req.decoded.id,
                token: req.headers.securityToken || req.headers.securitytoken,
                personas: doc
            }
            res.render('user/session', { data: data });
        }
    });
}

module.exports = permSess;