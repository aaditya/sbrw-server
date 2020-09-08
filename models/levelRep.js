const { Schema, model } = require('mongoose');

const levelRepSchema = new Schema({
  level: Number,
  expPoint: Number,
});

module.exports = model('Levels', levelRepSchema);
