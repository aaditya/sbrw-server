const personaModel = require(__base + 'models/driverPersona.js');

const nameFinder = (req, res) => {
    personaModel.findOne({ 'name': req.query.name }, (err, doc) => {
        if (err) {
            res.status(500).send('');
        }
        else {
            let available = doc ? false : true;
            res.type('application/xml').render('handlers/string.ejs', { flag: available });
        }
    });
}

module.exports = nameFinder;