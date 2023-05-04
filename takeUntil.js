const takeUntil = (array, callback) => {
  const stopIndex = array.findIndex(callback);
  const resultArray = array.slice(0, stopIndex);
  return resultArray;
}

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


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ",");
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"])