'use strict';

const Hapi = require('hapi');


class SessionService {
  constructor(settings) {
    this.server = new Hapi.Server({ port: settings.port, host: settings.host });
  }

  async start() {
    await this.server.start();
    console.log('The service is running at http://' + this.server.info.host + ':' + this.server.info.port);
  }

  async stop() {
    await this.server.stop();
    console.log('The service is stopped');
  }
}

module.exports = SessionService;