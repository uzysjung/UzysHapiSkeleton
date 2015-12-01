/**
 * Created by 1002125 on 15. 12. 1..
 */

module.exports = function() {
    var plugins =[];
    for(var i=0;i<arguments.length; i++) {
        if(Array.isArray(arguments[i])) {
            plugins.push(arguments[i]);
        }
    }
    return internals.promiseSeries(plugins);
}

var internals = {};


internals.promiseSeries = function(promises) {
    var results = null;


    return new Promise(function(resolve,reject){

        function next(result) {
            //console.log('result',result);
            if(!results) {
                results = [];
            } else {
                results = results.concat(results);
            }

            if(promises.length) {

                while(promises.length) {
                    var promise = promises.shift();
                    //console.log('promise:',promise);
                    Promise.all(promise)
                        .then(next)
                        .catch(reject);
                }
            } else {
                resolve(results);
            }
        }

        next();


    });


}