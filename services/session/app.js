const SessionService = require("./service");
const settings = require("../../settings/session");

const service = new SessionService(settings);
service.setupDbConnection();
service.start();