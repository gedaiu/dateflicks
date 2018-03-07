const PlaybackControl = require("../../services/timecode/playbackControl");
var should = require('should');

describe("The playback control", function() {
  var playbackControl;
  var now;

  beforeEach(function() {
    now = new Date();
    playbackControl = new PlaybackControl(1);
    playbackControl.status.lastChange = now;
    playbackControl.position.videoLength = 1001;
  });

  describe("The status control", function() {
    it("should have the status `stop` by default", function() {
      playbackControl.status.value().should.equal("stop");
    });

    it("should have the status `play` when both clients have status `play`", function() {
      playbackControl.status.host = "play";
      playbackControl.status.guest = "play";

      playbackControl.status.value().should.equal("play");
    });

    describe("when the last chage was 60 seconds ago", function() {
      beforeEach(function() {
        playbackControl.status.lastChange = new Date(new Date() - 60001);
      });

      it("should have the status `play` when the guest is `stop` and the host is `play`", function() {
        playbackControl.status.host = "play";
        playbackControl.status.guest = "stop";
  
        playbackControl.status.value().should.equal("play");
      });
    });
  });

  describe("The video position", function() {
    it("should be `0` by default", function() {
      playbackControl.position.value().should.equal(0);
    });

    it("should be the host value when the guest is ahead", function() {
      var position = Math.random() * 1000;

      playbackControl.position.host = position;
      playbackControl.position.guest = position + Math.random();
      playbackControl.position.value().should.equal(position);
    });

    it("should be the guest value when the host is ahead", function() {
      var position = Math.random() * 1000;

      playbackControl.position.host = position + Math.random();
      playbackControl.position.guest = position;
      playbackControl.position.value().should.equal(position);
    });

    it("the position should not be greater than the video length", function() {
      var position = Math.random() * 1000;
      
      playbackControl.position.videoLength = 0;
      playbackControl.position.host = position + Math.random();
      playbackControl.position.guest = position;
      playbackControl.position.value().should.equal(0);
    });
  });

  it("should convert the playback control to an event message", function() {
    playbackControl.toEventMessage().should.deepEqual({
      sessionId: 1,
      length: 1001,
      currentPosition: 0,
      status: "stop",
      lastStatusChange: now
    });
  });
});