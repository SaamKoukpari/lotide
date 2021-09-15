const assertEqual = function(actual, expected) {
  return (actual === expected ? (`✅✅✅Assertion Passed: ${actual} === ${expected} `) : (`🛑🛑🛑Assertion Failed: ${actual} !== ${expected} `));
};

console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));

//the following function has 2 arrays as inputs, which it should test and see if they are equal to each other

//in other words, our function eqArrays needs to compare 2 arrays to one another, and return the correct boolean value as a string true/false

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

//we can use our previous function assertEqual to write test cases for various scenarios

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false