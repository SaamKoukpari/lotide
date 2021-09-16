const assertEqual = function(actual, expected) {
  return (actual === expected ? (`✅✅✅Assertion Passed: ${actual} === ${expected} `) : (`🛑🛑🛑Assertion Failed: ${actual} !== ${expected} `));
};

const countLetters = function(allLetters) {
  const result = {}

  for (const letter of allLetters) {

    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }

  return result;

}

console.log(countLetters("lighthouse in the house"))
console.log(countLetters("LHL")) 