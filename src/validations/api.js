/**
 * Created by uzysjung on 15. 7. 9..
 */
var joi = require('joi');
module.exports = {

    list : {
        query: {
            page: joi.number().integer().description('page'),
        },
        params: {
            id: joi.number().integer().description('API ID')
        }
    }
}