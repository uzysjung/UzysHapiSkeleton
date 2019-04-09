/**
 * Created by uzysjung on 15. 7. 9..
 */

'use strict';
const Joi = require('joi');

module.exports = {

    list : {
        query: {
            page: Joi.number().integer().description('page')
        },
        params: {
            id: Joi.number().integer().description('API ID')
        }
    }
};