const { Schema, model } = require('mongoose');

const User = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  pwd: String,
  wallet: {
    boost: {
      type: Number,
      default: 0,
    },
  },
});

module.exports = model('User', User);
