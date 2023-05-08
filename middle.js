const middle = function(array) {
  let middleIndex = Math.floor(array.length / 2);
  if (array.length === 1 || array.length === 2) {
    return [];
  }
  if (array.length % 2 === 1) {
    return [array[middleIndex]];
  }
  if (array.length % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]];
  }
};

module.exports = middle;