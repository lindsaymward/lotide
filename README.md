# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @lindsaymward/lotide`

**Require it:**

`const _ = require('@lindsaymward/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: Takes in an array as an argument and returns the first element from the array.
* `tail(...)`: Takes in an array as an argument and returns every element except the first element.
* `middle(...)`: Takes in an array as an argument and returns the middle element.
* `without(...)`: Takes in two arrays as arguments and returns the first array with the second array items removed from it.
* `countLetters(...)`: Takes in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `countOnly(...)`: Takes in a collection of items and return counts for a specific subset of those items.
* `letterPositions(...)`: Return all the indices (zero-based positions) in the string where each character is found.
* `findKey(...)`: Takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `findKeyByValue(...)`: Takes in an object and a value. It should scan the object and return the first key that has that value. If no key exists with that value, return undefined.
* `map(...)`: Takes in an array and a callback function. Returns a new array based on the results of the callback.
* `takeUntil(...)`: Takes in an array and a calllback function. Returns new array with values up until the callback requirement.
* `flatten(...)`: Takes in an array with nested arrays and returns a single level array with all the values.