const personaModel = require('../../../models/driverPersona.js');

const deletePersona = (req, res) => {
  personaModel.findOneAndRemove({ user: req.decoded.id, stamp: req.query.personaId }, (err) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.type('application/xml').render('personas/personaDelete', { data: { id: req.query.personaId } });
    }
  });
};


module.exports = deletePersona;
