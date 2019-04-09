/**
 * Created by uzysjung on 17. 12. 13..
 */

'use strict';
const Hapi = require('hapi');
const config = require('./config');
const server = new Hapi.Server({ port: config.port, routes: { cors: true , jsonp: 'callback' } });

const main = async () => {

  try {
    await Promise.all([ require('./src/plugins/inert')(server), require('./src/plugins/vision')(server)]);
    await require('./src/plugins/scooter')(server);
    await require('./src/plugins/bassmaster')(server);
    await require('./src/plugins/h2o2')(server);
    await require('./src/plugins/therealyou')(server);
    await require('./src/plugins/hapi-auth-basic')(server);
    await require('./src/plugins/hapi-swagger')(server);

    server.route(require('./src/routes/default'));
    //for static file but not recommend due to performance , use nginx.
    server.route({ method: 'GET', path: '/public/{path*}', handler: { directory: { path: './public' ,redirectToSlash: true } } });

    await server.start();

    console.log(['info', 'server'], 'Server environment: ' + config.type);
    console.log(['info', 'server'], 'Server running at: ' + server.info.uri);

  } catch (e) {
    console.error(['error', 'server'],'Server Error Occured' + e);
    console.error('stack - ',e.stack);
  }
  return server;
};
main();

process.on('SIGINT', async () => {
  try {
    if(config.type !=='development') {
      console.log('Gaia Hapi stoppping Hapi');
      await server.stop({ timeout:1000 });
    }
  } catch(e) {
    console.error(e);
  }
  console.log('Gaia Hapi stopped');
  return process.exit(0);
});


module.exports = exports = server;

