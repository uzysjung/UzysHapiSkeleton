/**
 * Created by 1002125 on 15. 7. 9..
 */
'use strict';
const Bcrypt = require('bcryptjs');

const Adminusers = {
    username: 'uzysjung',
    password: '$2a$10$tWLZxWZ7Y7qbu5nPjUkQBOzfsHkxzqLU4yxUgzt4qVLk7pYVEPHRG'   // 'secret'
};

const validate = async (request, username, password, h) => {

    const user = Adminusers.username;
    if (!user) {
        return { credential : null , isValid: false } ;
    }

    let isValid = false;
    const credentials = { id: user.id, name: user.name };
    try {
        isValid = await Bcrypt.compare( password, Adminusers.password );
    } catch (e) {

    }

    return { credentials , isValid };

};




exports = module.exports =  async (server) => {
    try {
        await server.register(require('hapi-auth-basic'));
    } catch (e) {
        console.error('Error on hapi-auth-basic Plugin',e);
        throw e
    }
    server.auth.strategy('simple', 'basic', { validate });
    console.log(['info', 'plugin'], 'plugin: Hapi-auth-basic registered');

    return true;
};



function genBcryptHash (passwd) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(passwd, salt);
    console.log('compare:',bcrypt.compareSync(passwd, hash));
    console.log('hash:',hash);
}
