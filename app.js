/**
 * Created by uzysjung on 17. 12. 13..
 */

'use strict';
const Hapi = require('hapi');
const Config = require('./config');
const server = new Hapi.Server({ port: Config.port, routes: { cors: true , jsonp: 'callback' } });


const main = async () => {

    await Promise.all([ require('./src/plugins/inert')(server), require('./src/plugins/vision')(server)]);
    await require('./src/plugins/scooter')(server);
    await require('./src/plugins/hapi-auth-basic')(server);
    await require('./src/plugins/hapi-swaggered-ui')(server);
    // await require('./src/plugins/hapi-swagger')(server); now developing https://github.com/glennjones/hapi-swagger/tree/feature/hapi-17

    server.route(require('./src/routes/api'));

    //for static file but not recommend due to performance , use nginx.
    server.route({ method: 'GET', path: '/public/{path*}', handler: { directory: { path: './public' ,redirectToSlash: true } } });


    //for socket.io
    const io = require('socket.io')(server.listener);

    let cnt = 0;
    io.on('connection', function (socket) {


        console.log('ok');
        socket.emit('who' , { name: 'uzys' });

        socket.on('go', function (data) {
            socket.emit('come',{ cnt: cnt++ });
            console.log('go',data);
        });
    });

    await server.start();
    return server;
};


main()
    .then( (sv) => {
        console.log(['info', 'server'], 'Server environment: ' + Config.type);
        console.log(['info', 'server'], 'Server running at: ' + sv.info.uri);
    } )
    .catch( (err) => {
        console.log(['error', 'server'],'Server Error Occured' + err);
        console.log('stack - ',err.stack);
        process.exit(1);
    });


process.on('SIGINT', async () => {

    // My process has received a SIGINT signal
    // Meaning PM2 is now trying to stop the process
    try {
        await server.stop({ timeout:1000 });
    } catch(e) {
        console.error(e);
    }
    console.log('Colloseo Hapi server stopped');
    process.exit();


});


module.exports = exports = server;

