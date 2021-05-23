const Personas = require('../../../models/persona');

const nameFinder = async (req, res) => {
  const { query: { name }} = req;
  
  const persona = await Personas.findOne({ name });
  const available = !persona;
  
  return res
    .type('application/xml')
    .render('handlers/string.ejs', { flag: available });
};

module.exports = nameFinder;
