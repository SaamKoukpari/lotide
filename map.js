const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)){
    console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`);
  }
}

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, cb) {
  const results = [];
  for (let item of array) {
    results.push(cb(item));
  }  
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

const ba = ['r', 'o', 'o', 'a', 'o']
const ab = ['u', 't', undefined, 'o', undefined]


assertArraysEqual(map(words, word => word[1]), ba);
assertArraysEqual(map(words, word => word[3]), ab);


