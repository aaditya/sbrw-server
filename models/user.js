const { Schema, model } = require('mongoose');

const User = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  persona: [{
    carslots: {
      count: {
        type: Number,
      },
      slots: [{
        ownedCarTrans: String,
        selected: Boolean,
      }],
    },
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
  }],
  pwd: String,
  wallet: {
    boost: {
      type: Number,
      default: 0,
    },
  },
});

module.exports = model('User', User);
