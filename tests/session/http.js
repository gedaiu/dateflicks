const SessionService = require("../../services/session/service");
const http = require('http');
var should = require('should');

describe("The session service", function () {
  var service;

  beforeEach(function () {
    this.timeout(10000);

    service = new SessionService({
      port: 3000, mongo: {
        uri: "mongodb://localhost/test",
        connectionOptions: {
          reconnectTries: 3,
          reconnectInterval: 500
        }
      }
    });
  });

  afterEach(function () {
    service.stop();
  });

  it("should start on a provided port", function (done) {
    service.listen();

    const url = 'http://' + service.server.info.host + ':' + service.server.info.port;
    service.server.info.port.should.eql(3000);

    http.get(url, (resp) => {
      resp.statusCode.should.eql(404);
      done();
    }).on("error", done);
  });
});