const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns second two elements in three element array ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns empty array when input is an empty array []", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns an empty array for an input array with only one element [5]", () => {
    assert.deepEqual(tail([5]), []);
  });

  it("returns the last element when input is a two element array [4, 6]", () => {
    assert.deepEqual(tail([4, 6]), [6]);
  });

});