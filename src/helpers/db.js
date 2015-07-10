/**
 * Created by uzysjung on 15. 2. 4..
 */
"use strict";
var config = require('../../config');
var knex = require('knex')({
    client: 'mysql',
    connection : config.mysql
    //pool: {
    //    min: 2,
    //    max: 10
    //}
});

module.exports = function() {
    return knex;
}();
