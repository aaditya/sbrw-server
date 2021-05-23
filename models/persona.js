const { Schema, model } = require('mongoose');

const personaSchema = new Schema({
    userId: Schema.Types.ObjectId,
    carslots: [{
        ownedCarTrans: String,
        selected: Boolean,
    }],
    cash: Number,
    curCarIndex: Number,
    globalId: Number,
    iconIndex: Number,
    level: Number,
    motto: String,
    name: String,
    percentToLevel: Number,
    rating: Number,
    rep: Number,
    repAtCurrLvl: Number,
    score: Number,
});

module.exports = model('persona', personaSchema);
