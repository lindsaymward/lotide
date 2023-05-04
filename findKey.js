const findKey = (object, callback) => {
  let key = undefined;
  for (let index in object) {
    if (callback(object[index])) {
      key = index;
      break;
    }
  }
  return key;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} === ${expected}`);
  }
};

let result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2); // => "noma"

let result2 = findKey({
  "McDonalds": { rating: 2 },
  "A&W": { rating: 3 },
  "Bayview Brewing": { rating: 5 }
}, x => x.rating > 3);

assertEqual(result, "noma");
assertEqual(result2, "Bayview Brewing");
