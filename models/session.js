var mongoose = require('mongoose');

var SessionSchema = new mongoose.Schema({
  hostUserId: ObjectId,
  guestUserId: ObjectId,
  videoId: ObjectId,
  startTime: Date,
  isAccepted: Boolean,
  details: String
}); 

var SessionModel = mongoose.model("Session", {
  
});
