const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} === ${expected}`);
  }
};

const countLetters = function(sentence) {
  let count = {};
  let lowerCaseSentence = sentence.toLowerCase();
  for (let letter of lowerCaseSentence) {
    if (letter !== " ") {
      if (count[letter]) {
        count[letter] += 1;
      } else {
        count[letter] = 1;
      }
    }
  }
  return count;
};

console.log(countLetters("lighthouse in the house"));

// Should = {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }