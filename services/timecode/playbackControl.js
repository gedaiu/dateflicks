class PlaybackControl {
  constructor() {

  }

  status() {
    if(this.hostStatus == "play" && this.guestStatus == "play") {
      return "play";
    }

    return "stop";
  }
}

module.exports = PlaybackControl;