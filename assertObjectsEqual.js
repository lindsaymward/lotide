const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ ${inspect(actual)} and ${inspect(expected)} are equal!`);
  } else {
    console.log(`❌ ${inspect(actual)} and ${inspect(expected)} are not equal!`);
  }
};


const eqObjects = function(obj1, obj2) {
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  for (let key of obj1Keys) {
    if (Array.isArray(obj1[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

assertObjectsEqual({ name: "Lindsay"}, { name: "Lindsay"});
assertObjectsEqual({ name: "Lindsay"}, { name: "Lindsay", gender: "female"});