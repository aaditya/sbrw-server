// const Users = require('../../../models/user');

const deletePersona = async (req, res, next) => {
  try {
    // await Users.findOneAndUpdate({ _id: req.decoded.id, stamp: req.query.personaId });
    return res.type('application/xml').render('personas/personaDelete', { data: { id: req.query.personaId } });
  } catch (err) {
    return next(err);
  }
};

module.exports = deletePersona;
