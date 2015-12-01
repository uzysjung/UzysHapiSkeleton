/**
 * Created by 1002125 on 15. 7. 9..
 */
var config = require('../../config');

var swaggerConfig = {
  register: require('hapi-swagger'),
  options: {
      //basePath: config.SWAGGER_URL,
      apiVersion: require('../../package').version,
      auth: 'simple'
  }
};

module.exports = function(server) {

    return new Promise(function(resolve,reject) {
        server.register(swaggerConfig, function(err){
            if(err) {
                server.log(['error', 'plugin'], 'plugin: Swagger register error');
                reject(err);
            } else {
                server.log(['info', 'plugin'], 'plugin: Swagger registered');
                resolve();
            }
        });
    });



};
