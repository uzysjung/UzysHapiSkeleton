/**
 * Created by 1002125 on 15. 7. 9..
 */
'use strict';
//const Config = require('../../config');

const swaggerConfig = {
    register: require('hapi-swagger'),
    options: {
        //basePath: config.SWAGGER_URL,
        info : {
            title   : require('../../package').name,
            description : require('../../package').description,
            version : require('../../package').version
        },
        auth: 'simple',
        jsonEditor : true

    }
};


exports = module.exports =  async (server) => {
    try {
        await server.register(swaggerConfig);
    } catch (e) {
        console.error('Error on Swagger Plugin',e);
        throw e
    }
    console.log(['info', 'plugin'], 'plugin: Swagger registered');

    return true;
};
