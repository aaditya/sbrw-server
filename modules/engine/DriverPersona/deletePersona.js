const personaModel = require(__base + 'models/driverPersona.js');

const deletePersona = (req, res) => {
    personaModel.find({ user: req.decoded.id }, (err, doc) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            if (doc.length > 0) {
                let id = doc[req.query.personaId]._id;
                personaModel.findOneAndRemove({ _id: id }, (err, doc) => {
                    if (err) {
                        res.status(500).send(err.message);
                    }
                    else {
                        res.type('application/xml').render('personas/personaDelete', { data: { id: req.query.personaId } });
                    }
                });
            }
            else {
                res.type('application/xml').send('');
            }
        }
    });
}

module.exports = deletePersona;