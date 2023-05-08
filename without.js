const without = function(source, itemsToRemove) {
  let modifiedArray = source;
  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let j = 0; j < source.length; j++) {
      if (source[j] === itemsToRemove[i]) {
        modifiedArray.splice(j, 1);
      }
    }
  }
  return modifiedArray;
};

module.exports = without;