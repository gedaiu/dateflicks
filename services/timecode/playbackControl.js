class PlaybackStatus {
  value() {
    if(this.host == "play" && this.guest == "play") {
      return "play";
    }

    return "stop";
  }
}

class PlaybackControl {
  constructor() {
    this.status = new PlaybackStatus();
  }
}

module.exports = PlaybackControl;