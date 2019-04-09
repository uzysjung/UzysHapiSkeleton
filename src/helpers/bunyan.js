/**
 * Created by uzysjung on 18/01/2019
 */

const bunyan = require('bunyan');
const config = require('../../config');

const logger = bunyan.createLogger({
  name: 'UzysHapiSkeleton',                     // Required
  stream : config.bunyanFileStream
  // streams: [config.bunyanFileStream , { stream : kinesis }  ]
});

exports = module.exports = logger ;
