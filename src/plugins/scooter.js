/**
 * Created by uzysjung on 2016. 10. 3..
 */
'use strict';
//User-agent information plugin for hapi

exports = module.exports = async (server) => {

    try {
        await server.register(require('scooter'));
    } catch (e) {
        console.error('Error on Scooter Plugin',e);
        throw e
    }
    console.log(['info', 'plugin'], 'plugin: scooter registered');

};
