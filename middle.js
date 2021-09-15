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

const middle = function(array) {
  for (var i = 0; i < array.length; i++){
    let midIndex = array.length/2;

    if (array.length <= 2) {
      return [];
    } else {

      if (array.length % 2 !== 0){
        let array2 = [];
        array[i] = Math.ceil(midIndex);
        array2.push(array[i]);
        return array2;
      } else {
        let array3 = [];
        array3.push(array[midIndex - 1]);
        array3.push(array[midIndex]);
        return array3;
      }
    }
  }
};

console.log(middle([1])) //=> []
console.log(middle([1, 2])) //=> []
console.log(middle([1, 2, 3])) //=> [2]
console.log(middle([1, 2, 3, 4, 5])) //=> [3]
console.log(middle([1, 2, 3, 4])) //=> [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) //=> [3, 4]