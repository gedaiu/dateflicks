'use strict';

const Service = require("../service");
const EventEmitter = require('events');
const routes = require('./routes');

class SessionEmitter extends EventEmitter {}

class SessionService extends Service {
  constructor(settings) {
    super(settings);

    this.notifications = new SessionEmitter();

    routes.setup(this.server, this.notifications);
  }
}

module.exports = SessionService;