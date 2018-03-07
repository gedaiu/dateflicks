class PlaybackStatus {
  value() {
    if(this.host == "play" && this.guest == "play") {
      return "play";
    }

    return "stop";
  }
}

class PlaybackPosition {
  value() {
    return 0;
  }
}

class PlaybackControl {
  constructor() {
    this.status = new PlaybackStatus();
    this.position = new PlaybackPosition();
  }
}

module.exports = PlaybackControl;