const driverPersonaModel = require('../../../models/driverPersona.js');

const permSess = (req, res) => {
  driverPersonaModel.find({ user: req.decoded.id }, (err, doc) => {
    if (err) {
      res.status(500).send('');
    } else {
      const data = {
        id: req.decoded.id,
        token: req.headers.securityToken || req.headers.securitytoken,
        personas: doc,
      };
      res.render('user/session', { data });
    }
  });
};

module.exports = permSess;
