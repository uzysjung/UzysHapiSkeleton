/**
 * Created by 1002125 on 15. 7. 9..
 */


'use strict';

const UzysDB    = require('../helpers/UzysDB');
const _         = require('lodash');


class APITable extends UzysDB {

    constructor(tableName) {

        super(tableName);
    }
}

module.exports = new APITable('APITable');


