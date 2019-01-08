const uuidv1 = require('uuid/v1');
const uuidv5 = require('uuid/v5');

const userModel = require('../../models/user');

const authUser = (req, res) => {
    userModel.findOne({ email: req.query.email }, (err, doc) => {
        let data;
        if (err) {
            data = {
                "uid": 0,
                "token": "",
                "description": err.message
            }
        }
        else {
            if (doc && doc.password == req.query.password) {
                data = {
                    "uid": 1,
                    "token": uuidv5(req.query.email, uuidv1()),
                    "description": ""
                }
            }
            else {
                data = {
                    "uid": 0,
                    "token": "",
                    "description": "LOGIN ERROR"
                }
            }
        }
        res.type('application/xml').render('handlers/auth.ejs', { data: data });
    });
}

module.exports = authUser;