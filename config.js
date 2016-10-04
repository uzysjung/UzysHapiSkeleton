/**
 * Created by Uzysjung on 15. 7. 9..
 */
'use strict';

class Config {

    constructor() {
    }
    get type() {
        return process.env.NODE_ENV;
    }
    get mysql() {

        let ret = {
            host     : 'production.io',
            user     : 'root',
            password : 'root',
            database : 'UzysHapiSkeleton_production'
        };
        if (this.type === 'development') {

            ret = {
                host: 'localhost',
                user: 'root',
                password: 'root',
                database: 'UzysHapiSkeleton'
            };
        }
        return ret;
    }
    get MYSQL_POOL() {
        if ( process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test' ) {
            return { min: 0, max: 20 };
        }

        return { min: 0, max: 20 };
    }
    get port() {

        if (this.type === 'development') {
            return 8000;
        }
        return process.env.PORT;
    }

    get MYSQL_TIMEOUT() {
        return 1500;
    }

}

exports = module.exports = new Config();
