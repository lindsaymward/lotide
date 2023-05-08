const assert = require('chai').assert
const countOnly = require('../countOnly');

describe('#countOnly', () => {
  it('returns count of names in an array that have an object property set to true', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    const result1 = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };

    assert.deepEqual(countOnly(firstNames, result1), { Fang: 2, Jason: 1 });
  });
});