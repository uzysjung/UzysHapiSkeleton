/**
 * Created by uzysjung on 10/01/2019
 */
'use strict';
const os                  = require('os');
const instanceId         = os.hostname()+'_'+process.pid;
const bunyanLogger        = require('./bunyan');
const config              = require('../../config');

const internals = {};

internals.send = async function ( eventName , data ) {
  const createdTs = Date.now().toString();
  const environment = config.type;
  const service = 'Gaia';
  logData = { createdTs , instanceId , environment , service , eventName , data , v : '1.0'  };

  bunyanLogger.info( logData );
  await kinesisClient.putRecord(config.Kinesis.streamName , logData , createdTs );
};

exports = module.exports = internals;