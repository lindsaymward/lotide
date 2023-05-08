const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire"}

  it("returns first key which contains a value in the object", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  });

  it("returns undefined for value that does not exist in object", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  })
});