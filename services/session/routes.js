const SessionModel = require("../../models/session");
var mongoose = require('mongoose');

module.exports = {
  setup: function (server, notifications) {

    server.route({
      path: '/sessions',
      method: 'POST',
      handler: async function (request, h) {
        request.payload.session.hostUserId = new mongoose.mongo.ObjectId(request.payload.session.hostUserId);
        request.payload.session.guestUserId = new mongoose.mongo.ObjectId(request.payload.session.guestUserId);
        request.payload.session.videoId = new mongoose.mongo.ObjectId(request.payload.session.videoId);

        try {
          const result = await new SessionModel(request.payload.session).save();
          notifications.emit("newSession", request.payload.session.guestUserId, request.payload.session);

          return { session: result };
        } catch (err) {
          console.log(err);
          return err;
        }
      }
    });
  }
}