const waitForConfirmation = 60000;

class PlaybackStatus {
  constructor() {
    this.lastChange = new Date();
  }

  value() {
    let diff = new Date() - this.lastChange;

    if(this.host != this.guest && diff >= waitForConfirmation) {
      return "play";
    }

    if (this.host == "play" && this.guest == "play") {
      return "play";
    }

    return "stop";
  }
}

class PlaybackPosition {

  constructor(videoLength) {
    this.host = 0;
    this.guest = 0;
    this.videoLength = 0;
  }

  value() {
    return Math.min(this.videoLength, Math.min(this.host, this.guest));
  }
}

class PlaybackControl {
  constructor() {
    this.status = new PlaybackStatus();
    this.position = new PlaybackPosition();
  }

  toEventMessage() {
    return {};
  }
}

module.exports = PlaybackControl;