const assertEqual = require('./assertEqual');

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

module.exports = eqObjects;
