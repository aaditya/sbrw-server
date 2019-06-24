const mongoose = require('mongoose');
const schema = mongoose.Schema;

const driverPersona = new schema({
    boost: Number,
    cash: Number,
    curCarIndex: Number,
    iconIndex: Number,
    level: Number,
    motto: String,
    name: String,
    percentToLevel: Number,
    rating: Number,
    rep: Number,
    repAtCurrLvl: Number,
    score: Number,
    user: mongoose.Schema.Types.ObjectId,
    stamp: Number
});

module.exports = mongoose.model('driverpersona', driverPersona);