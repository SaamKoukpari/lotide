const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

eqArrays([1, 2, 3], [1, 2, 3]) // => true

assertArraysEqual([1, 2, 3], [1, 2, 3]);
