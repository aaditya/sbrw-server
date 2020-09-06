const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Users = require('../../../models/user');

const ecr = require('../Miscellaneous/crypt');

const authUser = async (req, res, next) => {
  try {
    const user = await Users.findOne({ email: req.query.email });
    if (!user) throw new Error('No Email Found');

    if (await bcrypt.compare(req.query.password, user.password)) {
      const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
      const etok = ecr.xcrypt(token);
      const data = { uid: 1, token: etok, description: '' };
      return res.type('application/xml').render('handlers/auth.ejs', { data });
    }

    const data = { uid: 0, token: '', description: 'LOGIN ERROR' };
    return res.type('application/xml').render('handlers/auth.ejs', { data });
  } catch (err) {
    const data = { uid: 0, token: '', description: 'LOGIN ERROR' };
    res.type('application/xml').render('handlers/auth.ejs', { data });
    return next(err);
  }
};

module.exports = authUser;
