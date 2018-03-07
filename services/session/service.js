'use strict';

const Hapi = require('hapi');
const mongoose = require('mongoose');

class SessionService {
  constructor(settings) {
    this.settings = settings;
    this.server = new Hapi.Server({ port: settings.port, host: settings.host });
  }

  async start() {
    mongoose.connect(this.settings.mongo);

    await this.server.register({
      plugin: require('hapi-router'),
      options: {
        routes: 'services/session/routes/*.js' // uses glob to include files
      }
    })

    await this.server.start();
    console.log('The service is running at http://' + this.server.info.host + ':' + this.server.info.port);
  }

  async stop() {
    await this.server.stop();
    console.log('The service is stopped');
  }
}

module.exports = SessionService;