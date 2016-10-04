/**
 * Created by uzysjung on 2016. 10. 3..
 */
'use strict';
//Hapi plugin for the Pino logger

exports = module.exports = function (server) {

    return new Promise((resolve,reject) => {

        server.register(require('hapi-pino'), (err) => {

            if (err) {
                reject(err);
            }
            else {
                server.log(['info', 'plugin'], 'plugin: Hapi-pino registered');
                resolve();
            }
        });
    });
};
