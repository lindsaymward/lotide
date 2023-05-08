const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it("returns an array that has been modified to remove certain elements", () => {
    assert.deepEqual(without([1,2,3], [2, "3"]), [1, 3]);
  });
  it("returns an array with only one element removed", () => {
    assert.deepEqual(without([1,2,3], [1]), [2, 3]);
  });
  it("returns an array with string values removed", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
});