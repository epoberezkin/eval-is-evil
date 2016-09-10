var {messageTemplate, recipients, messages} = require('./data');
var assert = require('assert');


function createMessage(recipient) {
  return messageTemplate.replace(/{{([a-z_]+)}}/ig,
    function(match, key) {
      return recipient[key];
    }
  );
}


assert.deepStrictEqual(recipients.map(createMessage), messages);
console.log('OK!');
