var {schema, formats, validData, invalidData} = require('./data');
var assert = require('assert');


function validate(schema, data) {
  for (var prop in schema) {
    var value = data[prop];
    if (typeof value != 'string') return false;
    var pattern = formats[schema[prop]];
    if (!pattern.test(value)) return false;
  }
  return true;
}


assert.strictEqual(validate(schema, validData), true);
assert.strictEqual(validate(schema, invalidData), false);
console.log('OK!');
