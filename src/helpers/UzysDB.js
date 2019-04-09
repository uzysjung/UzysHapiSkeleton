/**
 * Created by 1002125 on 2016. 7. 20..
 */

'use strict';
const DBConfig  = require('../../config');
const _         = require('lodash');
//const Co        = require('co');
class UzysDB {

    constructor(tableName,option) {

        this.tableName = tableName;
        if (_.isNil(option)) {
            option = { client: 'mysql', connection: DBConfig.MYSQL, pool: DBConfig.MYSQL_POOL };
        }
        this.knex = require('knex')(option);
    }

    fetch(cond,option) {

        let column;
        let timeout;
        let ret;
        if (_.hasIn(option,'column')) {
            column = option.column;
        }
        if (_.hasIn(option,'timeout')) {
            timeout = option.timeout;
        }
        else {
            timeout = DBConfig.MYSQL_TIMEOUT;
        }

        if (_.isNil(cond)) {
            ret = this.knex(this.tableName).select(column).timeout(timeout, { cancel: true });
        }
        else {
            ret = this.knex(this.tableName).select(column).where(cond).timeout(timeout, { cancel: true });
        }
        return ret;
    }
    fetchPage(cond,option) {

        if (option &&  option.page < 1) {
            return new Error('page must be set over 0');
        }
        if (_.isNil(option)) {
            option = {
                page : 1,
                pageSize : 25
            };
        }
        else {
            if (!option.page) {
                option.page = 1;
            }
            if (!option.pageSize) {
                option.pageSize = 25;
            }
        }

        const page = option.page;
        const pageSize = option.pageSize;
        const orderByOrder = option.orderBy;
        const orderByColumn = option.orderByColumn;
        if (orderByColumn && orderByOrder) {
            return this.fetch(cond,option).orderBy(orderByColumn,orderByOrder).limit(pageSize).offset( ( page - 1 ) * pageSize );
        }
        return this.fetch(cond,option).limit(pageSize).offset( ( page - 1 ) * pageSize );

    }
    fetchCount(cond,option) {

        let ret;
        let column;
        let timeout;

        if (_.hasIn(option,'column')) {
            column = option.column + ' as count';
        }
        else {
            column = '* as count';
        }
        if (_.hasIn(option,'timeout')) {
            timeout = option.timeout;
        }
        else {
            timeout = DBConfig.MYSQL_TIMEOUT;
        }

        if (_.isNil(cond)) {
            ret = this.knex(this.tableName).count(column).timeout(timeout, { cancel: true });
        }
        else {
            ret = this.knex(this.tableName).count(column).where(cond).timeout(timeout, { cancel: true });
        }
        return ret;

    }
    upsert(data) {

        let query = this.knex(this.tableName).insert(data).toString();
        const dupStr = [];
        const dupArr = [];

        for (const key of Object.keys(data)) {

            if (_.hasIn(data, key) && !_.isNil(data[key])) {
                dupStr.push(` ${key} = ?`);
                dupArr.push(data[key]);
            }
        }
        query += ' on duplicate key update ' + this.knex.raw(dupStr.toString(),dupArr);
        return this.knex.raw(query);
    }

    pagination(qb,page,pageSize) {

        return qb.limit(pageSize).offset((page - 1) * pageSize);
    }
    query(cb) {

        return cb(this.knex(this.tableName));

    }
    /*
     * data : array or string
     * returning : array or string
     * */
    save(data) {

        return this.knex(this.tableName).insert(data);
    }

    update(cond,data) {
        if (_.isNil(cond)) {
            return new Error('no Condition in update query');
        }
        return this.knex(this.tableName).where(cond).update(data);
    }

    delete(cond) {
        return this.knex(this.tableName).where(cond).del();
    }

};

module.exports = exports = UzysDB;
//
// class tmpDB extends UzysDB {
//     constructor(tableName) {
//         super(tableName)
//
//     }
// }
//
// let tmp = new tmpDB('USER_LOGIN_LOG');
// console.log (tmp.fetch(null,null));
//
// Co(function*(){
//     let data =yield tmp.fetchPage();
//     console.log(data);
//     let data2 = yield tmp.query(function(qb){
//
//         return qb.select().limit(1);
//
//     });
//
//     let das = data2[0];
//     delete das.id;
//     das.ip = 'abcl';
//     console.log('das:',das);
//     // let saved = yield tmp.update({id : 22},das);
//     let saved = yield  tmp.save(das);
//     console.log(saved);
//
//     let tmt = yield tmp.fetch();
//     console.log(tmt);
// }).catch(function(e){
//     console.error('e',e.stack);
// });
//
//

