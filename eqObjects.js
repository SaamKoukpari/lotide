const assertEqual = function(actual, expected) {
  return (actual === expected ? (`✅✅✅Assertion Passed: ${actual} === ${expected} `) : (`🛑🛑🛑Assertion Failed: ${actual} !== ${expected} `));
};

const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let prop1 of keys1) {

     if (Array.isArray(object1[prop1])) {

      if (!(eqArrays(object1[prop1], object2[prop1]))) {
        return false;
      } else {
      if (object1[prop1] !== object2[prop1]) {
        return false;
      }
    }
  }
  return true;
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertEqual(eqObjects(ab, ba), true)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqual(eqObjects(ab, abc), false)); // => false
