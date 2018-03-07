const PlaybackControl = require("../../services/timecode/playbackControl");

describe("The playback control", function() {
  var playbackControl;

  beforeEach(function() {
    playbackControl = new PlaybackControl();
  });

  it("should have the status `stop` by default", function() {
    playbackControl.status().should.equal("stop");
  });

  it("should have the status `play` when both clients have status `play`", function() {
    playbackControl.hostStatus = "play";
    playbackControl.guestStatus = "play";

    playbackControl.status().should.equal("play");
  });
});