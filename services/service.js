'use strict';

const Hapi = require('hapi');
const mongoose = require('mongoose');
const EventEmitter = require('events');

class Service {
  constructor(settings) {
    this.settings = settings;
    this.server = new Hapi.Server({ port: settings.port, host: settings.host });
  }

  async setupDbConnection() {
    await mongoose.connect(this.settings.mongo.uri, this.settings.mongo.connectionOptions);
  }

  async closeDbConnection() {
    await mongoose.connection.close(function() {
      console.log('The service is stopped');
    });
  }

  async listen() {
    await this.server.start();
    console.log('The service is running at http://' + this.server.info.host + ':' + this.server.info.port);
  }

  async stop() {
    await this.server.stop({ timeout: 1000 });
  }
}

module.exports = Service;