const TimecodeService = require("../../services/timecode/service");
const http = require('http');
var should = require('should');

describe("The timecode service", function() {
  var service;

  afterEach(function() {
    if(service) {
      service.stop();
      service = null;
    }
  });

  it("should start on a provided port", function(done) {
    service = new TimecodeService({ port: 4000, mongo: "mongodb://localhost/test" });
    service.start();
    const url = 'http://' + service.server.info.host + ':' + service.server.info.port;

    service.server.info.port.should.eql(4000);

    http.get(url, (resp) => {
      resp.statusCode.should.eql(404);
      done();
    }).on("error", done);
  });
});