/**
 * Created by uzysjung on 15. 7. 9..
 */
'use strict';

const {  it , experiment , describe ,test } = exports.lab =  require('lab').script();
const Code = require('code');
const expect = Code.expect;
//
// const suite = lab.suite;
// const test = lab.test;
// const before = lab.before;
// const after = lab.after;
// const expect = lab.expect;


experiment('math', () => {

    test('returns true when 1 + 1 equals 2',  () => {

        expect( 1 + 1 ).to.equal(2);
    });
});

//BDD
describe('math', () => {

    it('returns true when 1 + 1 equals 2',  () => {

        expect(1 + 1).to.equal(2);
    });
});

//
// const Server = require('../app');
//
//
//
// test('main endpoint lists apis on the network', async () => {
//
//     const options = {
//         method: 'GET',
//         url: '/api/3'
//     };
//
//     const response = await Server.inject(options);
//     const result = response.result;
//     console.log('result:',result);
//     Code.expect(response.statusCode).to.equal(200);
//     Code.expect(result.name).to.be.instanceof(Array);
//     Code.expect(result.name).to.have.length(3);
//
// });

// // DynamoDBFetch
// const main = async ()=>{
//   const confDBFetch = require('./periodicDBFetching').fetchAll;
//   await confDBFetch();
//   const DBConfig = require('./periodicDBFetching').db;
//   const rest =await internals.fetchMethod( 1, 'uid0' , 'itemId', { limit :4 , serviceType : 55 } , DBConfig.methods['3'] );
//   console.log('rest',rest);
// };
// main();