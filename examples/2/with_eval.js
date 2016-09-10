var {messageTemplate, users, messages} = require('./data');
var assert = require('assert');


var code = 'return "';
code += messageTemplate.replace(/{{([a-z_]+)}}/ig,
  function(match, key) {
    return '" + data.' + key + ' + "';
  }
);
code += '";'
var userMessage = new Function('data', code);


assert.deepStrictEqual(users.map(userMessage), messages);
console.log('OK!');
