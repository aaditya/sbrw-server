const Personas = require('../../../models/persona');

const registerPersona = async (req, res) => {
  const { decoded: { id }, query } = req;
  const { iconIndex, name } = query;

  const persona = await Personas.create({
    userId: id,
    percentToLevel: 0,
    rating: 0,
    rep: 0,
    repAtCurrLvl: 0,
    score: 0,
    cash: 300000,
    iconIndex,
    level: 1,
    name,
  });

  const data = {
    ...persona.toObject(),
    localId: 1
  };

  return res
    .type('application/xml')
    .render('personas/personaCreate.ejs', { data });
};

module.exports = registerPersona;
