'use strict';

const Hapi = require('hapi');
const mongoose = require('mongoose');
const Service = require("../service");

class TimecodeService extends Service {
  constructor(settings) {
    super(settings);
  }
}

module.exports = TimecodeService;