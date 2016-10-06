/**
 * Created by 1002125 on 15. 7. 9..
 */
'use strict';
const Bcrypt = require('bcryptjs');

const Adminusers = {
    username: 'uzysjung',
    password: '$2a$10$tWLZxWZ7Y7qbu5nPjUkQBOzfsHkxzqLU4yxUgzt4qVLk7pYVEPHRG'   // 'secret'
};

const validate = function (request, username, password, callback) {


    const user = Adminusers.username;
    if (!user) {
        return callback(null, false);
    }

    Bcrypt.compare(password, Adminusers.password, ( err, isValid) => {

        if (err) {
            console.log(err);
        }
        callback(err, isValid, { id: user.id, name: user.name });
    });
};



exports = module.exports = function (server) {

    return new Promise( (resolve,reject) => {

        server.register(require('hapi-auth-basic'), (err) => {

            if (err) {
                server.log(['error', 'plugin'], 'plugin: Hapi-auth-basic register error');
                reject(err);
            }
            else {
                server.auth.strategy('simple', 'basic', { validateFunc: validate });
                //server.route({ method: 'GET', path: '/', config: { auth: 'simple' } });
                server.log(['info', 'plugin'], 'plugin: Hapi-auth-basic registered');
                resolve();
            }
        });

    });

};


function genBcryptHash (passwd) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(passwd, salt);
    console.log('compare:',bcrypt.compareSync(passwd, hash));
    console.log('hash:',hash);
}
