/**
 * Created by uzysjung on 15. 7. 9..
 */
'use strict';
const Code = require('code');
const Lab = require('lab');

const lab = exports.lab = Lab.script();

const suite = lab.suite;
const test = lab.test;
const before = lab.before;
const after = lab.after;
const expect = Code.expect;
const Server = require('../app');
lab.test('main endpoint lists apis on the network', (done) => {

    const options = {
        method: 'GET',
        url: '/api/3'
    };

    Server.inject(options, (response) => {

        const result = response.result;
        console.log('result:',result);
        Code.expect(response.statusCode).to.equal(200);
        Code.expect(result.name).to.be.instanceof(Array);
        Code.expect(result.name).to.have.length(3);

        done();
    });
});


lab.experiment('math', () => {

    lab.test('returns true when 1 + 1 equals 2', (done) => {

        Code.expect( 1 + 1 ).to.equal(2);
        done();
    });
});

//BDD
lab.describe('math', () => {

    lab.it('returns true when 1 + 1 equals 2', (done) => {

        expect(1 + 1).to.equal(2);
        done();
    });
});
