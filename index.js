const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const eqArray = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  eqArray: eqArray,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual
};
