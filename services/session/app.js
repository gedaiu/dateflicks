const SessionService = require("./service");
const settings = require("../../settings/session");

new SessionService(settings).start();