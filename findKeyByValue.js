const findKeyByValue = function(object, value) {
  for (let show in object) {
    if (value === object[show]) {
      return show;
    }
  }
  return undefined;
}

module.exports = findKeyByValue;