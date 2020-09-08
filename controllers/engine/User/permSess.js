const Users = require('../../../models/user');

const permSess = async (req, res, next) => {
  try {
    const { decoded: { id }, token } = req;
    const { persona } = await Users.findOne({ _id: id });

    const data = { id, token, persona };
    return res.render('user/session', { data });
  } catch (err) {
    return next(err);
  }
};

module.exports = permSess;
