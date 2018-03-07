'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server({ port: 3000, host: 'localhost' });


async function startServer() {
  await server.start() // start the Hapi server on your localhost
  console.log('The service is running at http://localhost:' + server.info.port);
}

startServer();