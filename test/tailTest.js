const tail = require('../tail');
const assertEqual = require('../assertEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail([1, 2, 3, 4, 5]));
console.log(tail(words));
console.log(assertEqual(words.length, 3))
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));