const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Users = require('../../../models/user');

const ecr = require('../Miscellaneous/crypt');

const register = async (req, res, next) => {
  try {
    const user = await Users.findOne({ email: req.query.email });
    if (user) {
      const data = { uid: 0, token: '', description: 'Registration Error: Email already exists!' };
      return res.type('application/xml').render('handlers/auth.ejs', { data });
    }

    const pwdHash = await bcrypt.hash(req.query.password, 10);
    const newUser = await new Users({
      email: req.query.email,
      pwd: pwdHash,
    }).save();

    const token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY);
    const etok = ecr.xcrypt(token);
    const data = { uid: newUser._id, token: etok, description: '' };

    return res.type('application/xml').render('handlers/auth.ejs', { data });
  } catch (err) {
    const data = { uid: 0, token: '', description: 'LOGIN ERROR' };
    res.type('application/xml').render('handlers/auth.ejs', { data });
    return next(err);
  }
};

module.exports = register;
