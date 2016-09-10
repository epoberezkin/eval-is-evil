var {source, result, transformation} = require('./data');
var assert = require('assert');


var code = 'return { ';
for (var key in transformation) {
  var path = transformation[key];
  var segments = path.split('/');
  var data = 'source';
  var expr = data;
  for (var i=1; i<segments.length; i++) {
    data += '.' + segments[i];
    expr += ' && ' + data;
  }
  code += key + ': ' + expr + ', ';
}
code += '};'
var transform = new Function('source', code);


assert.deepStrictEqual(transform(source), result);
console.log('OK!')
