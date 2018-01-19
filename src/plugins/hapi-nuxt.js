/**
 * Created by uzysjung on 18. 01. 11..
 */
'use strict';
const HapiNuxt = require('hapi-nuxt');


module.exports = async (server) => {

    try {
        await server.register(HapiNuxt);

    } catch (e) {
        console.error(['error', 'plugin'], 'plugin: Hapi-Nuxt register error');
        throw e;
    }

    console.log(['info', 'plugin'], 'plugin: Hapi-Nuxt registered');
    return true;

};


