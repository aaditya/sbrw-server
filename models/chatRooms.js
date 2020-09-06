const mongoose = require('mongoose');

const schema = mongoose.Schema;

const chatrms = new schema({
  ID: Number,
  amount: Number,
  longName: String,
  shortName: String,
});

module.exports = mongoose.model('chatRoom', chatrms);
