/**
 * Created by uzysjung on 15. 2. 4..
 */
"use strict";

exports = module.exports = function (db, table) {

    return {
        'create': function (data, cb) {
            db(table).insert(data)
                .then(function (rows) {
                    cb(null, rows);
                }).catch(function (error) {
                    cb(error, null);
                });
        },
        'update': function (id, data, cb) {
            db(table).where('id', id).update(data)
                .then(function (rows) {
                    cb(null,rows);
                }).catch(function (error) {
                    cb(error, null);
                });
        },
        'remove': function (id,cb) {
            db(table).where('id',id).del()
                .then(function (rows) {
                    cb(null,rows);
                }).catch(function (error) {
                    cb(error, null);
                });
        },
        'load': function (sel,cond,opts,cb) {
            if(sel && sel.length > 0) {
                db(table).select(sel).where(cond).limit(opts.limit).offset(opts.offset).orderBy('id',opts.order)
                    .then(function(rows){
                        cb(null,rows);
                    }).catch(function(error){
                        cb(error,null);
                    });

            } else {
                db(table).where(cond).limit(opts.limit).offset(opts.offset).orderBy('id',opts.order)
                    .then(function(rows){
                        cb(null,rows);
                    }).catch(function(error){
                        cb(error,null);
                    });

            }
        },
        'db' : function () {
            return db(table) ;
        }
    };

};