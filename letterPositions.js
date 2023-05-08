const letterPositions = function(sentence) {
  const results = {};
  for (let index in sentence) {
    let letter = sentence[index];
    if (letter !== " ") {
      if (!results[letter]) {
        results[letter] = [Number(index)];
      } else {
        results[letter].push(Number(index));
      }
    }
  }
  return results;
};

module.exports = letterPositions;