const inputFn = require('./index');

test('inputFn function is defined', () => {
  expect(typeof inputFn).toEqual('function');
});

test('gets output', () => {
  expect(inputFn()).toEqual('ouput');
});
