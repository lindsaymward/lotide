const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  it("returns new callback-modified array", () => {
    assert.deepEqual(map(['this', 'is', 'good'], word => word.toUpperCase()), ['THIS', "IS", "GOOD"]);
  })
})