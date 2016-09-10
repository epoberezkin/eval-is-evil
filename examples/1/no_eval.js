var {source, result, transformation} = require('./data');
var assert = require('assert');


function transform(source) {
  var result = {};
  for (var key in transformation) {
    var path = transformation[key];
    var segments = path.split('/');
    var data = source;
    for (var i=1; i<segments.length; i++) {
      data = data && data[segments[i]];
    }
    result[key] = data;
  }
  return result;
}


assert.deepStrictEqual(transform(source), result);
console.log('OK!')
