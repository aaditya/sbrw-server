const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
  ID: Number,
  eventModeId: Number,
  isEnabled: Number,
  isLocked: Number,
  maxCarClassRating: Number,
  maxLevel: Number,
  minCarClassRating: Number,
  minLevel: Number,
  name: String,
});

module.exports = model('Events', eventSchema);
