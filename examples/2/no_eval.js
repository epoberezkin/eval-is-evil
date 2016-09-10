var {messageTemplate, users, messages} = require('./data');
var assert = require('assert');


function userMessage(user) {
  return messageTemplate.replace(/{{([a-z_]+)}}/ig,
    function(match, key) {
      return user[key];
    }
  );
}


assert.deepStrictEqual(users.map(userMessage), messages);
console.log('OK!');
