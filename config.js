/**
 * Created by Uzysjung on 15. 7. 9..
 */
"use strict";

var _type = process.env.NODE_ENV;

function _mysql() {
    if(_type === 'development') {

        return {
            host     : 'localhost',
            user     : 'root',
            password : 'root',
            database : 'UzysHapiSkeleton'
        }

    } else {
        return {
            host     : 'production.io',
            user     : 'root',
            password : 'root',
            database : 'UzysHapiSkeleton_production'
        }

    }

}

function _port() {
    if(_type==='development') {
        return 8000;
    } else {
        return process.env.PORT;
    }
}
exports= module.exports = {};
exports.mysql = _mysql();
exports.PORT = _port();
exports.NODE_ENV = _type || 'production';
exports.SWAGGER_URL =  process.env.SWAGGER_URL || 'http://0.0.0.0:'+_port();
exports.LOGLEVEL = process.env.LOG_LEVEL || 'INFO';
exports.GOOD_CONSOLE = process.env.GOOD_CONSOLE || 'log,response,request,error';




