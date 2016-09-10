exports.schema = {
  foo: 'identifier',
  bar: 'date'
};


exports.formats = {
  identifier: /^[a-z_$][a-z0-9_$]*$/i,
  date: /^\d{2}\/\d{2}\/\d{4}$/
};


exports.validData = {
  foo: 'abc',
  bar: '15/09/2016'
};


exports.invalidData = {
  foo: '1',
  bar: '15-09-2016'
};
