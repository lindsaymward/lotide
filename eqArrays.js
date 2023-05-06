const eqArrays = function(arr1, arr2) {
  let match;
  for (let i = 0; i < arr1.length; i++) {
      arr1[i] === arr2[i] ? match = true : match = false;
    }
  return match;
}

module.exports = eqArrays;
const assertEqual = require('./assertEqual');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["1", "2", 3], ["1", "2", "3"]), false);
assertEqual(eqArrays([1, true, "true"], [1, true, "true"]), true);