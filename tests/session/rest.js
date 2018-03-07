const SessionService = require("../../services/session/service");
const SessionModel = require("../../models/session");
var should = require('should');

const session = {
  "hostUserId": "00000001d1f2064f37db0a06",
  "guestUserId": "00000002d1f2064f37db0a07",
  "videoId": "00000002d1f2064f37db0a07"
};

describe("The session service REST API", function () {
  var service;

  beforeEach(function () {
    service = new SessionService({ port: 3000, mongo: "mongodb://localhost/test" });
  });

  it("should create a session", function(done) {
    service.server.inject({
      method: 'POST',
      url: '/sessions',
      payload: {
        'session': session
      }
    }).then(function(response) {
      response.statusCode.should.equal(200);

      SessionModel.find({ _id: response.result.session._id }, function(err, data) {
        if(err) {
          return done(err);
        }

        try {
          data.length.should.equal(1);
          data[0].hostUserId.toString().should.equal(session.hostUserId);
          data[0].guestUserId.toString().should.equal(session.guestUserId);
          data[0].videoId.toString().should.equal(session.videoId);
          done();
        } catch(err) {
          done(err);
        }
      });
    }).catch(done);
  });

  it("should raise an event to notify the client notifications", function(done) {
    service.notifications.on("newSession", function(data) {
      data.hostUserId.toString().should.equal(session.hostUserId);
      data.guestUserId.toString().should.equal(session.guestUserId);
      data.videoId.toString().should.equal(session.videoId);

      done();
    });

    service.server.inject({
      method: 'POST',
      url: '/sessions',
      payload: {
        'session': session
      }
    });
  });
});