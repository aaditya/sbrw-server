const Users = require('../../../models/user');

const nameFinder = async (req, res, next) => {
  try {
    const persona = await Users.findOne({ 'persona.name': req.query.name });
    const available = !persona;
    res.type('application/xml').render('handlers/string.ejs', { flag: available });
  } catch (err) {
    next(err);
  }
};

module.exports = nameFinder;
