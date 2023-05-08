const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("returns a single array when an array with nested arrays is given as an argument", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("returns the same array when given an array with a single value", () => {
    assert.deepEqual(flatten([4]), [4]);
  });
});