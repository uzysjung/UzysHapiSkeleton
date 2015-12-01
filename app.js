/**
 * Created by 1002125 on 15. 7. 9..
 */


var Hapi = require('hapi');
var config = require('./config');
var server = new Hapi.Server();
var pluginsLoader = require('./src/helpers/pluginsLoader');
server.connection({ port: config.PORT, routes: { cors: true } });


pluginsLoader(
    [
        require('./src/plugins/good')(server),
        require('./src/plugins/inert')(server),
        require('./src/plugins/vision')(server),
        require('./src/plugins/hapi-auth-basic')(server), //uzysjung:uzysjung
        require('./src/plugins/hapi-swagger')(server) // http://localhost:PORT/documentation

    ],
    [
        require('./src/plugins/tv')(server) // http://localhost:PORT/debug/console - //inert,vision needed
    ]
    )
    .then(function(results){

        server.route(require('./src/routes/api'));

        //for static file but not recommend due to performance , use nginx.
        server.route({ method: 'GET', path: '/public/{path*}', handler: { directory: { path: './public' ,redirectToSlash: true} } });

        server.start(function (err) {
            if(err) {
                server.log(['error', 'server'],'Server Error Occured' + err);
                process.exit();
            }
            server.log(['info', 'server'], 'Server environment: ' + config.NODE_ENV);
            server.log(['info', 'server'], 'Server running at: ' + server.info.uri);
        });


    })
    .catch(function(err){
        server.log(['error', 'server'],'plugin registeration error Occured' + err);
        process.exit();
    });

module.exports = server;

