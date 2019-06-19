const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require(__base + 'models/user');

const register = (req, res) => {
    userModel.findOne({ "email": req.query.email }, (err, doc) => {
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
                bcrypt.hash(req.query.password, 10, (err, hash) => {
                    if (err) {
                        let data = {
                            "uid": 0,
                            "token": "",
                            "description": "LOGIN ERROR"
                        }
                        res.type('application/xml').render('handlers/auth.ejs', { data: data });
                    }
                    else {
                        let newUser = new userModel({
                            email: req.query.email,
                            password: hash
                        });
                        newUser.save((err, doc) => {
                            let data;
                            if (err) {
                                data = {
                                    "uid": 0,
                                    "token": "",
                                    "description": "LOGIN ERROR"
                                }
                                res.type('application/xml').render('handlers/auth.ejs', { data: data });
                            }
                            else {
                                jwt.sign({ id: doc._id }, req.app.get('tokenSign'), (err, token) => {
                                    if (err) {
                                        data = {
                                            "uid": 0,
                                            "token": "",
                                            "description": "LOGIN ERROR"
                                        }
                                    }
                                    else {
                                        data = {
                                            "uid": doc._id,
                                            "token": token,
                                            "description": ""
                                        }
                                        res.type('application/xml').render('handlers/auth.ejs', { data: data });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        }
    });
}

module.exports = register;