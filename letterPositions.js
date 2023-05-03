const letterPositions = function(sentence) {
  const results = {};
  for (let index in sentence) {
    let letter = sentence[index];
    if (letter !== " ") {
      if (!results[letter]) {
        results[letter] = [Number(index)];
      } else {
        results[letter].push(Number(index));
      }
    }
  }
  return results;
};

const eqArrays = function(arr1, arr2) {
  let match;
  for (let i = 0; i < arr1.length; i++) {
      arr1[i] === arr2[i] ? match = true : match = false;
    }
  return match;
}

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ ${array1} and ${array2} are equal!`);
  } else {
    console.log(`❌ ${array1} and ${array2} are not equal!`);
  }
}

console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello")["h"], [0]);
assertArraysEqual(letterPositions("hello")["e"], [1]);
assertArraysEqual(letterPositions("hello")["l"], [2, 3]);
assertArraysEqual(letterPositions("hello")["o"], [4]);