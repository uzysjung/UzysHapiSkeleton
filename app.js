/**
 * Created by 1002125 on 15. 7. 9..
 */

var Hapi = require('hapi');
var config = require('./config');
var server = new Hapi.Server();
server.connection({ port: config.PORT, routes: { cors: true } });
server.views({
    engines: {
        html: require('handlebars')
        //ejs : require('ejs')
    },
    relativeTo: __dirname,
    path: './src/views',
    layout:'default',
    layoutPath: './src/views/layout',
    partialsPath: './src/views/partials',
    //helpersPath: './src/views/helpers'
});

require('./src/plugins/good')(server);
require('./src/plugins/hapi-auth-basic')(server); //uzysjung:uzysjung
require('./src/plugins/hapi-swagger')(server); // http://localhost:PORT/documentation
require('./src/plugins/tv')(server); // http://localhost:PORT/debug/console

server.route(require('./src/routes/api'));

//for static file but not recommend due to performance , use nginx.
server.route({ method: 'GET', path: '/public/{path*}', handler: { directory: { path: './public' } } });

server.start(function () {
    server.log(['info', 'server'], 'Server environment: ' + config.NODE_ENV);
    server.log(['info', 'server'], 'Server running at: ' + server.info.uri);
});

module.exports = server;

