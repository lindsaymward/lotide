const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} === ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};

// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const result = tail([]);
assertEqual(result.length, 0);
assertEqual(result[0], undefined);

const numbers = [1, 2];
let shortNumbers = tail(numbers);
assertEqual(shortNumbers[0], 2);