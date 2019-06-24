const personaModel = require(__base + 'models/driverPersona.js');

const registerPersona = (req, res) => {
    personaModel.findOne({ name: req.query.name }, (err, user) => {
        if (err) {
            res.status(500).send('Server Error');
        }
        else {
            if (user) {
                res.send('Player with this name already exists!');
            }
            else {
                let newPersona = new personaModel({
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
                    stamp: new Date().getTime()
                });
                newPersona.save((err, profile) => {
                    if (err) {
                        res.status(500).send('Server Error');
                    }
                    else {
                        res.type('application/xml').render('personas/personaCreate.ejs', { data: profile });
                    }
                });
            }
        }
    });
}

module.exports = registerPersona;

