'use strict';

require('dotenv').config();
const _ = require('lodash');

// common config
const common = {
  app: {
    dummy: 'common'
  }
};

// environment specific configs
const dev = {
  app: {
    dummy: 'dev'
  }
};
const prod = {
  app: {
    dummy: 'prod'
  }
};
const config = {
  dev,
  prod
};

// merge common and environment configs
module.exports = _.merge(common, config[process.env.NODE_ENV]);
