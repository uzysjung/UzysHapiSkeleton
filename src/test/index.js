/**
 * Created by uzysjung on 15. 7. 9..
 */

var Code = require('Code');
var Lab = require('Lab');

var lab = exports.lab = Lab.script();

var suite = lab.suite;
var test = lab.test;
var before = lab.before;
var after = lab.after;
var expect = Code.expect;

Lab.test("main endpoint lists apis on the network", function(done) {
    var options = {
        method: "GET",
        url: "/api"
    };

    server.inject(options, function(response) {
        var result = response.result;

        Lab.expect(response.statusCode).to.equal(200);
        Lab.expect(result).to.be.instanceof(Array);
        Lab.expect(result).to.have.length(5);

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
describe('math', function () {

    it('returns true when 1 + 1 equals 2', function (done) {

        expect(1+1).to.equal(2);
        done();
    });
});