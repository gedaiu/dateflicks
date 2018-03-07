var mongoose = require('mongoose');

var SessionSchema = new mongoose.Schema({
  hostUserId: 'ObjectId',
  guestUserId: 'ObjectId',
  videoId: 'ObjectId',
  startTime: 'date',
  isAccepted: 'boolean',
  details: 'string'
});

module.exports = mongoose.model("Session", SessionSchema);

