/**
 * Created by uzysjung on 15. 11. 28..
 */
'use strict';
const Inert = require('inert');

//Static file and directory handlers plugin for hapi.js.

exports = module.exports =  async (server) => {
    try {
        await server.register(Inert);
    } catch (e) {
        console.error('Error on Inert Plugin',e);
        throw e
    }
    console.log(['info', 'plugin'], 'plugin: inert registered');

    return true;
};