const PlaybackControl = require("../../services/timecode/playbackControl");

describe("The playback control", function() {
  var playbackControl;

  beforeEach(function() {
    playbackControl = new PlaybackControl();
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
  });
});