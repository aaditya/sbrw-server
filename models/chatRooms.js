const { Schema, model } = require('mongoose');

const chatrms = new Schema({
  ID: Number,
  amount: Number,
  longName: String,
  shortName: String,
});

module.exports = model('chatRoom', chatrms);
