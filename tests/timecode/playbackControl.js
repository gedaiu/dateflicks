const PlaybackControl = require("../../services/timecode/playbackControl");

describe("The playback control", function() {
  var playbackControl;

  beforeEach(function() {
    playbackControl = new PlaybackControl();
  });

  it("should have the status `stop` by default", function() {
    playbackControl.status().should.equal("stop");
  });


});