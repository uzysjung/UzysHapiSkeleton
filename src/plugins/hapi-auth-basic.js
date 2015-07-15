/**
 * Created by 1002125 on 15. 7. 9..
 */
var bcrypt = require('bcrypt');

var Adminusers = {
        username: 'uzysjung',
        password: '$2a$10$tWLZxWZ7Y7qbu5nPjUkQBOzfsHkxzqLU4yxUgzt4qVLk7pYVEPHRG',   // 'secret'
};

var validate = function (request, username, password, callback) {


    var user = Adminusers.username;
    if (!user) {
        return callback(null, false);
    }

    bcrypt.compare(password, Adminusers.password, function (err, isValid) {
        console.log(err);
        callback(err, isValid, { id: user.id, name: user.name });
    });
};



module.exports = function(server) {
    server.register(require('hapi-auth-basic'), function (err) {
        if(err) {
            server.log(['error', 'plugin'], 'plugin: Hapi-auth-basic register error');
        } else {
            server.auth.strategy('simple', 'basic', { validateFunc: validate });
            //server.route({ method: 'GET', path: '/', config: { auth: 'simple' } });
            server.log(['info', 'plugin'], 'plugin: Hapi-auth-basic registered');

        }
    });
};


function genBcryptHash(passwd) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(passwd, salt);
    console.log('compare:',bcrypt.compareSync(passwd, hash));
    console.log('hash:',hash);
}
