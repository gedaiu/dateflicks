'use strict';

const Hapi = require('hapi');
const mongoose = require('mongoose');
const EventEmitter = require('events');
const routes = require('./routes');

class SessionEmitter extends EventEmitter {}

class SessionService {
  constructor(settings) {
    this.settings = settings;
    this.server = new Hapi.Server({ port: settings.port, host: settings.host });
    this.dbConnection = mongoose.connect(this.settings.mongo);
    this.notifications = new SessionEmitter();

    routes.setup(this.server);
  }

  async start() {
    await this.server.start();
    console.log('The service is running at http://' + this.server.info.host + ':' + this.server.info.port);
  }

  async stop() {
    this.server.stop({timeout: 1000});
    console.log('The service is stopped');
  }
}

module.exports = SessionService;