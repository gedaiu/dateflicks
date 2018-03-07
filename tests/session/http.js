const SessionService = require("../../services/session/service");

describe("The session service", function() {
  var service;

  afterEach(function() {
    if(service) {
      service.stop;
      service = null;
    }
  });

  it("should start on a provided port", function() {
    service = new SessionService({ port: 3000 });
    service.start();
  });
});