/**
 * Created by 1002125 on 15. 7. 9..
 */
'use strict';
const DEBUG = require('debug')('api');
const ModelAPI = require('../models/api');
const version = require('../../package').version;

const internal = {};

internal.root = function (request , h ) {
  DEBUG('root page start');
  return h.view('index', { title: 'Gaia' , version});
};
internal.health = function ( request , h ) {
  return h.response('OK');
};

exports = module.exports = internal;