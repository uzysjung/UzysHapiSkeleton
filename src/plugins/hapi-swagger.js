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

exports = module.exports = function (server) {

    return new Promise( (resolve,reject) => {

        server.register(swaggerConfig, (err) => {
            if (err) {
                server.log(['error', 'plugin'], 'plugin: Swagger register error');
                reject(err);
            }
            else {
                server.log(['info', 'plugin'], 'plugin: Swagger registered');
                resolve();
            }
        });
    });



};
