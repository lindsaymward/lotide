const findKey = (object, callback) => {
  let key = undefined;
  for (let index in object) {
    if (callback(object[index])) {
      key = index;
      break;
    }
  }
  return key;
};

module.exports = findKey;