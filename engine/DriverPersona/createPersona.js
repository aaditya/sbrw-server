const personaModel = require(__base + 'models/driverPersona.js');

const registerPersona = (req, res) => {
    personaModel.find({}).exec((err, major) => {
        if (err) {
            res.status(500).send('Server Error');
        }
        else {
            personaModel.findOne({ name: req.query.name }, (err, user) => {
                if (err) {
                    res.status(500).send('Server Error');
                }
                else {
                    if (user) {
                        res.send('Player with this name already exists!');
                    }
                    else {
                        let count = major.length + 1;
                        let newPersona = new personaModel({
                            percentToLevel: 0,
                            rating: 0,
                            rep: 0,
                            repAtCurrLvl: 0,
                            score: 0,
                            boost: 10000,
                            cash: 300000,
                            iconIndex: req.query.iconIndex,
                            level: 1,
                            numId: count,
                            name: req.query.name,
                            user: req.decoded.id
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
    });
}

module.exports = registerPersona;

