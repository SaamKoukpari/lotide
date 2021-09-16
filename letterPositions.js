const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)){
    console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`);
  }
}

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

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    let word = sentence[i]
    if (word !== " ") {

      if (results[word]) {
        results[word].push(i);

      } else {
        results[word] = [i];
      }
    }
  }

  return results;
};

console.log(letterPositions("Lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);
