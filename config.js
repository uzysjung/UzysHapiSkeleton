/**
 * Created by Uzysjung on 15. 7. 9..
 */
'use strict';
const AWS = require('aws-sdk');
class Config {

  constructor() {
  }

  get type() {
    return process.env.NODE_ENV;
  }

  get mysql() {

    let ret;
    switch (this.type) {

      case 'development' :
      case 'local' :
        ret = {
          client: 'mysql',
          connection: {
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'HapiSkeleton'
          },
          pool: { min: 0, max: 5 }
        };
        break;

      case 'production' :
      default:
        break;
    }

    return ret;
  }

  get port() {

    if (this.type === 'local') {
      return 8000;
    }
    return process.env.PORT;
  }

  get bunyanFileStream() {
    let path = '/var/log/yanolja/gaiaLog.json';

    if( this.type === 'local' ) {
      path = './bunyan.dev.log.json';
    }
    return { type: 'file', path };

  }
}

exports = module.exports = new Config();
