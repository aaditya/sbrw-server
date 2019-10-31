const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userModel = require('../../../models/user');
const ecr = require('../Miscellaneous/crypt');

const register = (req, res) => {
  userModel.findOne({ email: req.query.email }, (err, doc) => {
    if (err) {
      const data = {
        uid: 0,
        token: '',
        description: err.message,
      };
      res.type('application/xml').render('handlers/auth.ejs', { data });
    } else if (doc) {
      const data = {
        uid: 0,
        token: '',
        description: 'Registration Error: Email already exists!',
      };
      res.type('application/xml').render('handlers/auth.ejs', { data });
    } else {
      bcrypt.hash(req.query.password, 10, (err, hash) => {
        if (err) {
          const data = {
            uid: 0,
            token: '',
            description: 'LOGIN ERROR',
          };
          res.type('application/xml').render('handlers/auth.ejs', { data });
        } else {
          const newUser = new userModel({
            email: req.query.email,
            password: hash,
          });
          newUser.save((err, doc) => {
            let data;
            if (err) {
              data = {
                uid: 0,
                token: '',
                description: 'LOGIN ERROR',
              };
              res.type('application/xml').render('handlers/auth.ejs', { data });
            } else {
              jwt.sign({ id: doc._id }, req.app.get('tokenSign'), (err, token) => {
                if (err) {
                  data = {
                    uid: 0,
                    token: '',
                    description: 'LOGIN ERROR',
                  };
                } else {
                  const etok = ecr.xcrypt(token);
                  data = {
                    uid: doc._id,
                    token: etok,
                    description: '',
                  };
                  res.type('application/xml').render('handlers/auth.ejs', { data });
                }
              });
            }
          });
        }
      });
    }
  });
};

module.exports = register;
