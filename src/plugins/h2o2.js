/**
 * Created by uzysjung on 2017. 3. 29..
 */

'use strict';


exports = module.exports =  async (server) => {
  try {
    await server.register(require('h2o2'));
  } catch (e) {
    console.error(['error', 'plugin'], 'plugin: h2o2 register error' , e);

    throw e;
  }
  console.log(['info', 'plugin'], 'plugin: h2o2 registered');

  return true;
};
