/**
 * Created by uzysjung on 2016. 10. 3..
 */
'use strict';
//User-agent information plugin for hapi

exports = module.exports = function (server) {

    return new Promise((resolve,reject) => {

        server.register(require('scooter'), (err) => {

            if (err) {
                reject(err);
            }
            else {
                server.log(['info', 'plugin'], 'plugin: scooter registered');
                resolve();
            }
        });
    });
};
