const TimecodeService = require("./service");
const settings = require("../../settings/timecode");

const service = new TimecodeService(settings);
service.setupDbConnection();
service.start();