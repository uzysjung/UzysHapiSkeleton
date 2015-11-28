/**
 * Created by uzysjung on 15. 11. 28..
 */
var inert = require('inert');


module.exports = function(server) {
    server.register(inert, function(){
        server.log(['info', 'plugin'], 'plugin: inert registered');
    });
};
