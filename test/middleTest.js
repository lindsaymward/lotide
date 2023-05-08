const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns second element in array for three element array [1,2,3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns two middle elements in new array when input array is even length [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("returns two middle elements with longer even length array [1, 2, 3, 4, 5, 6, 7, 8]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
  });
});