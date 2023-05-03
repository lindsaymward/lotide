const eqArrays = function(arr1, arr2) {
  let match;
  for (let i = 0; i < arr1.length; i++) {
    arr1[i] === arr2[i] ? match = true : match = false;
  }
  return match;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ ${array1} and ${array2} are equal!`);
  } else {
    console.log(`❌ ${array1} and ${array2} are not equal!`);
  }
};

const middle = function(array) {
  let middleIndex = Math.floor(array.length / 2);
  if (array.length === 1 || array.length === 2) {
    return [];
  }
  if (array.length % 2 === 1) {
    return [array[middleIndex]];
  }
  if (array.length % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]];
  }
};

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
console.log(middle([1, 2]));