const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {
  it("returns key of object that matches callback condition", () => {
    const stars = {"Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 } };

    assert.equal(findKey(stars, x => x.stars === 2), "noma");
  });

  it("returns key of object that matches rating condition", () => {
    const restaurants = { "McDonalds": { rating: 2}, "A&W": { rating: 3 }, "Bayview Brewing": { rating: 5 }};

    assert.equal(findKey(restaurants, x => x.rating > 3), "Bayview Brewing");
  });
});