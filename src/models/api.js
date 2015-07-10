/**
 * Created by 1002125 on 15. 7. 9..
 */
var db = require('../helpers/db');
var crud = require('../helpers/knexCRUD');

exports=module.exports = crud(db,'updateDate');

/*-------for customization---------*/
module.exports.getUpdateDate = function(cb) {

    db('updateDate').limit(1).orderBy('id','desc')
        .then(function(rows){
            cb(null,rows);
        }).catch(function(error){
            cb(error,null);
        });

};