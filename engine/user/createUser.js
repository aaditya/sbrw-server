const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../../models/user');

const register = (req, res) => {
    userModel.find({}).exec((err, users) => {
        if (err) {
            res.status(500).send('');
        }
        else {
            let count = users + 1;
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
                                    password: hash,
                                    status: 0,
                                    numId: count
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
                                        jwt.sign({ id: doc._id, email: doc.email }, req.app.get('superSecret'), (err, token) => {
                                            if (err) {
                                                data = {
                                                    "uid": 0,
                                                    "token": "",
                                                    "description": "LOGIN ERROR"
                                                }
                                            }
                                            else {
                                                data = {
                                                    "uid": doc.numId,
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
            })
        }
    });
}

module.exports = register;