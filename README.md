# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @saamkoukpari/lotide`

**Require it:**

`const _ = require('@saamkoukpari/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: asserts equality of arrays
* `assertEqual(...)`: asserts equality of two values
* `eqArrays(...)`: compares two arrays to see if they are equal
* `head(...)`: outputs first index of an array
* `middle(...)`: outputs center of an array
* `tail(...)`: outputs all indices after the first, of an array
* `countOnly(...)`: counts a specific subset of input items
* `assertObjectsEqual(...)`: asserts equality of two objects
* `countLetters(...)`: returns count of letters within a string
* `eqObjects(...)`: compares two objects
* `findKey(...)`: returns first key where the callback returns truthy within an object
* `findKeyByValue(...)`: searches the key within an object where a value matches given value
* `letterPositions(...)`: returns all indices within a string of characters
* `map(...)`: creates a new array within a provided function
* `takeUntil(...)`: returns a slice of an array, where elements are taken from the beginning
* `without(...)`: removes elements from an array