var {messageTemplate, recipients, messages} = require('./data');
var assert = require('assert');


var code = 'return "';
code += messageTemplate.replace(/{{([a-z_]+)}}/ig,
  function(match, key) {
    return '" + data.' + key + ' + "';
  }
);
code += '";'
var createMessage = new Function('data', code);


assert.deepStrictEqual(recipients.map(createMessage), messages);
console.log('OK!');
