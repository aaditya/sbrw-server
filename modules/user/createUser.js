const uuidv1 = require('uuid/v1');
const uuidv5 = require('uuid/v5');

const userModel = require('../../models/user');

const register = (req, res) => {
    userModel.findOne({ "email": req.query.email }).exec((err, doc) => {
        if (err) {
            let data = {
                "uid": 0,
                "token": "",
                "description": err.message
            }
            res.type('application/xml').render('handlers/auth.ejs', { data: data });
        }
        else {
            if (doc) {
                let data = {
                    "uid": 0,
                    "token": "",
                    "description": "Registration Error: Email already exists!"
                }
                res.type('application/xml').render('handlers/auth.ejs', { data: data });
            }
            else {
                let newUser = new userModel({
                    email: req.query.email,
                    password: req.query.password
                });
                newUser.save((err, doc) => {
                    let data;
                    if (err) {
                        data = {
                            "uid": 0,
                            "token": "",
                            "description": err.message
                        }
                    }
                    else {
                        data = {
                            "uid": 1,
                            "token": uuidv5(req.query.email, uuidv1()),
                            "description": ""
                        }
                    }
                    res.type('application/xml').render('handlers/auth.ejs', { data: data });
                });
            }
        }
    })
}

module.exports = register;