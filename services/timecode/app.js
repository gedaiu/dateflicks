const TimecodeService = require("./service");
const settings = require("../../settings/timecode");

new TimecodeService(settings).start();