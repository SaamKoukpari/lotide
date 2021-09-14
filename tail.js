const assertEqual = function(actual, expected) {
  return (actual === expected ? (`✅✅✅Assertion Passed: ${actual} === ${expected} `) : (`🛑🛑🛑Assertion Failed: ${actual} !== ${expected} `));
};

console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));

const tail = function(array) {
  let newArray = []
  for (i = 0; i < array.length; i++) {
    if(i !== 0) {
      newArray.push(array[i])
    }
  }
  return newArray
}

const words = ["Yo Yo", "Lighthouse", "Labs"];


console.log(tail([1, 2, 3, 4, 5]));
console.log(tail(words));
console.log(assertEqual(words.length, 3))
