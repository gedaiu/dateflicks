class PlaybackStatus {
  value() {
    if(this.host == "play" && this.guest == "play") {
      return "play";
    }

    return "stop";
  }
}

class PlaybackPosition {
  
  constructor() {
    this.host = 0;
  }

  value() {
    return this.host;
  }
}

class PlaybackControl {
  constructor() {
    this.status = new PlaybackStatus();
    this.position = new PlaybackPosition();
  }
}

module.exports = PlaybackControl;