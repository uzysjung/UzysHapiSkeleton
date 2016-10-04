/**
 * Created by 1002125 on 15. 7. 9..
 */
'use strict';
const Hapi = require('hapi');
const Config = require('./config');
const server = new Hapi.Server();
const Co = require('co');

server.connection({ port: Config.port, routes: { cors: true , jsonp: 'callback' } });

Co(function*() {

    yield require('./src/plugins/hapi-pino')(server);
    yield [ require('./src/plugins/inert')(server), require('./src/plugins/vision')(server) ];
    yield require('./src/plugins/scooter')(server);
    yield require('./src/plugins/hapi-auth-basic')(server);
    yield require('./src/plugins/hapi-swagger')(server);


    server.route(require('./src/routes/api'));
    //for static file but not recommend due to performance , use nginx.
    server.route({ method: 'GET', path: '/public/{path*}', handler: { directory: { path: './public' ,redirectToSlash: true } } });

    server.start((err) => {

        if (err) {
            server.log(['error', 'server'],'Server Error Occured' + err);
            process.exit();
        }
        server.log(['info', 'server'], 'Server environment: ' + Config.type);
        server.log(['info', 'server'], 'Server running at: ' + server.info.uri);
    });


}).catch( (e) => {

    server.log('app.js error:',e);
    server.log('stack - ',e.stack);
});

process.on('SIGINT', () => {

    // My process has received a SIGINT signal
    // Meaning PM2 is now trying to stop the process
    server.stop({ timeout:1000 }, (err) => {

        if (err) {
            console.error(err);
        }
        server.log('Colloseo Hapi server stopped');
        process.exit();
    });
});


module.exports = exports = server;

