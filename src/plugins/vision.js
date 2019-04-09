/**
 * Created by uzysjung on 15. 11. 28..
 */
'use strict';
const Vision = require('vision');


module.exports = async (server) => {

  try {

    await server.register(Vision);
    server.views({

      engines: {
        html: require('handlebars')
      },
      relativeTo: __dirname,
      path: '../views',
      layout:'default',
      layoutPath: '../views/layout',
      partialsPath: '../views/partials'

    });

  } catch (e) {
    console.error(['error', 'plugin'], 'plugin: vision register error');
    throw e;
  }

  console.log(['info', 'plugin'], 'plugin: vision registered');
  return true;

};


