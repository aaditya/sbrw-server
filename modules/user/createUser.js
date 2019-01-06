const userModel = require('../../models/user');

const register = (req, res) => {
    console.log(req.query);
    userModel.findOne({"email": req.query.email}).exec((err, doc) => {
        if (err) {
            res.type('application/xml');
        }
        else {
            if (doc) {
                // User Fouond
            }
            else {
                // User not found.
            }
        }
    })
}

module.exports = register;