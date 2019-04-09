/**
 * Created by 1002125 on 15. 7. 9..
 */
'use strict';
const ApiController = require('../controllers/default');
const ApiValidate = require('../validations/api');

exports = module.exports = function () {

  return [
    {
      method: 'GET',
      path: '/',
      options : {
        description: 'root page',
        notes: 'root view page ',
        tags :['root'],
        handler: ApiController.root
      }
    },
    {
      method: 'GET',
      path: '/health',
      options : {
        description: 'health check page',
        notes: 'health check page',
        tags :['api','healthCheck'],
        handler: ApiController.health

      }
    }
  ];
}();