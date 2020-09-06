const DriverPersona = require('../../../models/driverPersona.js');

const permSess = async (req, res, next) => {
  try {
    const { id } = req.decoded;
    const token = req.headers.securityToken || req.headers.securitytoken;
    const personas = await DriverPersona.find({ user: req.decoded.id });

    const data = { id, token, personas };
    return res.render('user/session', { data });
  } catch (err) {
    return next(err);
  }
};

module.exports = permSess;
