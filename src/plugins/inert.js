/**
 * Created by uzysjung on 15. 11. 28..
 */
var inert = require('inert');

//Static file and directory handlers plugin for hapi.js.

exports = module.exports = function(server) {

    return new Promise(function(resolve,reject) {
        server.register(inert, function(err){
            if(err) reject(err);
            else {
                server.log(['info', 'plugin'], 'plugin: inert registered');
                resolve();
            }
        });
    });
};
