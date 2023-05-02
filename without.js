const without = function(source, itemsToRemove) {
  let modifiedArray = source;
  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let j = 0; j < source.length; j++) {
      if (source[j] === itemsToRemove[i]) {
        modifiedArray.splice(j, 1);
      }
    }
  }
  return modifiedArray;
};


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

const num = [1, 2, 3];
const remove = [2, "3"];
assertArraysEqual(without([1, 2, 3], [2, "3"]), [1, 3]);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);