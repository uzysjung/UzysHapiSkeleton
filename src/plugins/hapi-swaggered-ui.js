'use strict';
const Config = require('../../config');

const swaggeredConfig = {
    plugin: require('hapi-swaggered'),
    options: {
        basePath : 'http:/localhost:8000/',
        tags: {
            'api': 'Example api description'
        },
        info: {
            title: require('../../package').name,
            description: require('../../package').description,
            version: require('../../package').version
        }
    }
};
const swaggeredUIConfig = {
    plugin: require('hapi-swaggered-ui'),
    options: {
        title   : require('../../package').name,
        auth: 'simple',
        path: '/documentation',
        swaggerOptions : {
        }

    }
};


exports = module.exports =  async (server) => {

    if(Config.type === 'development') {
        swaggeredUIConfig.options.swaggerOptions.validatorUrl = false;
    }

    try {
        await server.register([swaggeredConfig,swaggeredUIConfig]);
    } catch (e) {
        console.error('Error on Swagger Plugin',e);
        throw e
    }
    console.log(['info', 'plugin'], 'plugin: Swagger registered');

    return true;
};
