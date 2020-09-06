const Persona = require('../../../models/driverPersona.js');

const registerPersona = async (req, res, next) => {
  try {
    const persona = await Persona.findOne({ name: req.query.name });
    if (persona) {
      return res.send('Player with this name already exists!');
    }

    const profile = await new Persona({
      percentToLevel: 0,
      rating: 0,
      rep: 0,
      repAtCurrLvl: 0,
      score: 0,
      boost: 0,
      cash: 300000,
      iconIndex: req.query.iconIndex,
      level: 1,
      name: req.query.name,
      user: req.decoded.id,
      stamp: new Date().getTime(),
    }).save();

    return res.type('application/xml').render('personas/personaCreate.ejs', { data: profile });
  } catch (err) {
    return next(err);
  }
};

module.exports = registerPersona;
