/**
 * Created by uzysjung on 15. 11. 28..
 */
'use strict';
const Inert = require('inert');

//Static file and directory handlers plugin for hapi.js.

exports = module.exports = function (server) {

    return new Promise( (resolve,reject) => {

        server.register(Inert, (err) => {

            if (err) {
                reject(err);
            }
            else {
                server.log(['info', 'plugin'], 'plugin: inert registered');
                resolve();
            }
        });
    });
};
