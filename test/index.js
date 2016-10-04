/**
 * Created by uzysjung on 15. 7. 9..
 */

var Code = require('code');
var Lab = require('lab');

var lab = exports.lab = Lab.script();

var suite = lab.suite;
var test = lab.test;
var before = lab.before;
var after = lab.after;
var expect = Code.expect;
var server = require('../app');
lab.test("main endpoint lists apis on the network", function(done) {
    var options = {
        method: "GET",
        url: "/api/3"
    };

    server.inject(options, function(response) {
        var result = response.result;
        console.log('result:',result);
        Code.expect(response.statusCode).to.equal(200);
        Code.expect(result.name).to.be.instanceof(Array);
        Code.expect(result.name).to.have.length(3);

        done();
    });
});


lab.experiment('math', function () {

    lab.test('returns true when 1 + 1 equals 2', function (done) {

        Code.expect(1+1).to.equal(2);
        done();
    });
});

//BDD
lab.describe('math', function () {

    lab.it('returns true when 1 + 1 equals 2', function (done) {

        expect(1+1).to.equal(2);
        done();
    });
});
