const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require(__base + 'models/user');
const ecr = require('../Miscellaneous/crypt');

const authUser = (req, res) => {
    userModel.findOne({ email: req.query.email }, (err, doc) => {
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
            if (doc) {
                bcrypt.compare(req.query.password, doc.password, (err, result) => {
                    if (err) {
                        data = {
                            "uid": 0,
                            "token": "",
                            "description": "LOGIN ERROR"
                        }
                        res.type('application/xml').render('handlers/auth.ejs', { data: data });
                    }
                    else if (result) {
                        userModel.findByIdAndUpdate(doc._id, { status: 1 }, (err, doc) => {
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
                                        let etok = ecr.xcrypt(token);
                                        data = {
                                            "uid": 1,
                                            "token": etok,
                                            "description": ""
                                        }
                                    }
                                    res.type('application/xml').render('handlers/auth.ejs', { data: data });
                                });
                            }
                        });
                    }
                    else {
                        data = {
                            "uid": 0,
                            "token": "",
                            "description": "LOGIN ERROR"
                        }
                        res.type('application/xml').render('handlers/auth.ejs', { data: data });
                    }
                });
            }
            else {
                data = {
                    "uid": 0,
                    "token": "",
                    "description": "LOGIN ERROR"
                }
                res.type('application/xml').render('handlers/auth.ejs', { data: data });
            }
        }
    });
}

module.exports = authUser;