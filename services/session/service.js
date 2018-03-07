'use strict';

const Hapi = require('hapi');
const mongoose = require('mongoose');

class SessionService {
  constructor(settings) {
    this.settings = settings;
    this.server = new Hapi.Server({ port: settings.port, host: settings.host });
    this.dbConnection = mongoose.connect(this.settings.mongo);
  }

  async registerPlugins() {
    await this.server.register({
      plugin: require('hapi-router'),
      options: {
        routes: 'services/session/routes/*.js' // uses glob to include files
      }
    });
  }

  async start() {
    await this.registerPlugins();
    await this.server.start();
    console.log('The service is running at http://' + this.server.info.host + ':' + this.server.info.port);
  }

  async stop() {
    this.server.stop({timeout: 1000});
    console.log('The service is stopped');
  }
}

module.exports = SessionService;