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
  constructor(sessionId) {
    this.sessionId = sessionId;
    this.status = new PlaybackStatus();
    this.position = new PlaybackPosition();
  }

  toEventMessage() {
    return {
      sessionId: this.sessionId,
      length: this.position.videoLength,
      currentPosition: this.position.value(),
      status: this.status.value(),
      lastStatusChange: this.status.lastChange
    };
  }
}

module.exports = PlaybackControl;