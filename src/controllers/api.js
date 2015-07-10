/**
 * Created by 1002125 on 15. 7. 9..
 */

var DEBUG = require('debug')('api');
var apiModel = require("../models/api");
module.exports = {
    list: function (request,reply) {
        var id = request.params.id;
        var page = request.query.page;
        request.log('api params.id :',id);

        reply({name:["api1","api2","api3"],id:id,page:page});
    },
    root: function (request,reply) {
        reply.view('index', { title: 'UzysHapiSkeleton' });
    },
    auth: function (request,reply) {
        reply.view('authentication', { title: 'UzysHapiSkeleton Basic authentication' });

    }
};

