const SessionService = require("../../services/session/service");

new SessionService({ port: 3000 }).start();