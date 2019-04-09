/**
 * Created by 1002125 on 2017. 4. 7..
 */
/**
 * Created by uzysjung on 2017. 3. 29..
 */
'use strict';
const _ = require('lodash');
// let bassConfig = require('bassmaster');
let bassConfig = {
    plugin : require('bassmaster'),
    options: {
        batchEndpoint: '/batch',
        description : '배치리퀘스트를 위한 Route Endpoint ',
        notes : '여러개의 endpoint 리퀘스트를 한번의 호출로 받을 수 있도록 도와 줍니다 <br>' +
        'example : { "requests": [ { "method": "get", "path": "/reco/18/main/uid", "query": { "age": "23", "limit": 30 } } ] }',
        tags : [ 'api', 'bassmaster' ],
        //auth
    }
};

exports = module.exports = async function(server) {
    try {
      let result = await server.register(bassConfig);
    } catch(e) {
      console.error(['error', 'plugin'], 'plugin: bassMaster register error');
      throw e;
    }
    console.log(['info', 'plugin'], 'plugin: bassMaster registered');
};
