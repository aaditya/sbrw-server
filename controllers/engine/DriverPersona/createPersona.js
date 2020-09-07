const Users = require('../../../models/user');

const registerPersona = async (req, res, next) => {
  try {
    const user = await Users.findOne({ _id: req.decoded.id });

    const persona = {
      percentToLevel: 0,
      rating: 0,
      rep: 0,
      repAtCurrLvl: 0,
      score: 0,
      cash: 300000,
      iconIndex: req.query.iconIndex,
      level: 1,
      name: req.query.name,
    };

    await Users.findOneAndUpdate({ _id: req.decoded.id }, { $push: { persona } });

    const data = { ...persona, localId: user.persona.length };

    return res.type('application/xml').render('personas/personaCreate.ejs', { data });
  } catch (err) {
    return next(err);
  }
};

module.exports = registerPersona;
