const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
}

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ ${array1} and ${array2} are equal!`);
  } else {
    console.log(`❌ ${array1} and ${array2} are not equal!`);
  }
}

const eqArrays = function(arr1, arr2) {
  let match;
  for (let i = 0; i < arr1.length; i++) {
      arr1[i] === arr2[i] ? match = true : match = false;
    }
  return match;
}


const results1 = map(words, word => word[0]);
const upperCase = map(['this', 'is', 'good'], word => word.toUpperCase());
const capitalize = map(['lindsay', 'molly', 'joseph'], word => word[0].toUpperCase());
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(upperCase, ["THIS", "IS", "GOOD"]);
assertArraysEqual(capitalize, ["L", "M", "J"]);