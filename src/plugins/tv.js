/**
 * Created by 1002125 on 15. 7. 9..
 */
var Tvconfig = {
  register: require('tv'),
  options: {
      authenticateEndpoint:'simple',
  } //authentication using hapi-auth-basic
};

module.exports = function(server) {

    return new Promise(function(resolve,reject) {

        server.register(Tvconfig, function(err){
            if(err) {
                server.log(['error', 'plugin'], 'plugin: TV register error');
                reject(err);
            } else {
                server.log(['info', 'plugin'], 'plugin: TV registered');
                resolve();
            }
        });
    });
};
