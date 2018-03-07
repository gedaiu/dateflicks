const SessionService = require("../../services/session/service");
var should = require('should');

describe("The session service REST API", function () {
  var service;

  beforeEach(function () {
    service = new SessionService({ port: 3000, mongo: "mongodb://localhost/test" });
    service.start();
  });

  afterEach(function() {
    service.stop();
  });

  it("should create a session", function(done) {
    service.server.inject({
      method: 'POST',
      url: '/sessions',
      payload: {
        'session': {
          "hostUserId": 1,
          "guestUserId": 2,
          "videoId": 1
        }
      }
    }).then(function(response) {
      response.statusCode.should.equal(200);
      done();
    }).catch(done);
  });
});