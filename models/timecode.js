var mongoose = require('mongoose');

var TimecodeSchema = new mongoose.Schema({
  sessionId: 'objectId',
  length: 'number',
  currentPosition: 'number',
  hostStatus: 'string',
  guestStatus: 'string',
  lastStatusChange: 'date'
});

module.exports = mongoose.model('Timecode', TimecodeSchema);

