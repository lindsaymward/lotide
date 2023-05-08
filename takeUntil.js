const takeUntil = (array, callback) => {
  const stopIndex = array.findIndex(callback);
  const resultArray = array.slice(0, stopIndex);
  return resultArray;
};

module.exports = takeUntil;