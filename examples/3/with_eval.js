var {schema, formats, validData, invalidData} = require('./data');
var assert = require('assert');


var code = '';
for (var prop in schema) {
  var data = 'data.' + prop;
  code += 'if (typeof ' + data + ' != "string") return false;';
  code += 'if (!formats.' + schema[prop] + '.test('
            + data + ')) return false;';
}
code += 'return true;';
var validate = eval('(function(data) { ' + code + ' })');


assert.strictEqual(validate(validData), true);
assert.strictEqual(validate(invalidData), false);
console.log('OK!');
