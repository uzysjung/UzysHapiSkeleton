

var config = require('../../config');
var events = function (str) {
  return str.split(',').reduce(function(p, c, i){
    p[c] = '*';
    return p;
  }, {});
};

if (config.GOOD_CONSOLE){

  var reporter = {
    reporter: require('good-console'),
    events: events(config.GOOD_CONSOLE)
  };
}

var goodConfig = {
  register: require('good'),
  options: {
    reporters: [reporter]
  }
};

module.exports = function(server) {

    return new Promise(function(resolve,reject) {
        server.register(goodConfig, function(err){
            if(err) {
                server.log(['error', 'plugin'], 'plugin: good register error');
                reject(err);
            } else {
                server.log(['info', 'plugin'], 'plugin: good registered');
                server.log(['info','plugin'], "GOOD_CONSOLE Config:",goodConfig);
                resolve();
            }
        });
    });


};
