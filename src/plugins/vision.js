/**
 * Created by uzysjung on 15. 11. 28..
 */
var vision = require('vision');


module.exports = function(server) {
    return new Promise(function(resolve,reject) {
        server.register(vision, function(err){
            if(err) {
                server.log(['error', 'plugin'], 'plugin: vision register error');
                reject(err);
            } else {
                server.log(['info', 'plugin'], 'plugin: vision registered');
                resolve();
                server.views({
                    engines: {
                        html: require('handlebars')
                        //ejs : require('ejs')
                    },
                    relativeTo: __dirname,
                    path: '../views',
                    layout:'default',
                    layoutPath: '../views/layout',
                    partialsPath: '../views/partials',
                    //helpersPath: './src/views/helpers'
                });

            }
        });
    });


};
